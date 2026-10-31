import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { I18nContext, LANGUAGES, readLang, stringsFor, useI18n, type Lang } from "./i18n";
import { useProducts, type Product, type StoreLink } from "./products";

const SUPPORT_EMAIL = "support@tastematesapp.com";

/** Adds `is-visible` once the element scrolls into view, then stops watching. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  // Without IntersectionObserver there is nothing to wait for: show it at once.
  const [visible, setVisible] = useState(() => !("IntersectionObserver" in window));
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

/** A store badge-style link, or a plain note when the store isn't live yet. */
function StoreAction({ link, tone }: { link: StoreLink; tone: "light" | "dark" }) {
  const { t } = useI18n();
  if ("comingSoon" in link) {
    return <span className={`soon soon-${tone}`}>{t.store.comingSoon[link.store]}</span>;
  }
  return (
    <a
      className={`btn ${tone === "light" ? "btn-light" : "btn-dark"}`}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t.store.get[link.store]}
    </a>
  );
}

type ThemeChoice = "system" | "light" | "dark";
const THEME_ORDER: ThemeChoice[] = ["system", "light", "dark"];

function readTheme(): ThemeChoice {
  try {
    const t = localStorage.getItem("theme");
    return t === "light" || t === "dark" ? t : "system";
  } catch {
    return "system";
  }
}

/**
 * Cycles system → light → dark. "System" follows the device setting, which is
 * what most visitors want; the other two are an explicit override.
 */
function ThemeToggle() {
  const { t } = useI18n();
  const [theme, setTheme] = useState<ThemeChoice>(readTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") delete root.dataset.theme;
    else root.dataset.theme = theme;
    try {
      if (theme === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", theme);
    } catch {
      // Storage can be blocked (private mode); the choice then lasts this visit.
    }
  }, [theme]);

  const next = THEME_ORDER[(THEME_ORDER.indexOf(theme) + 1) % THEME_ORDER.length];
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={`${t.theme.label[theme]}. ${t.theme.switchTo[next]}`}
      title={t.theme.label[theme]}
    >
      {theme === "light" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
        </svg>
      ) : theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 3.5a8.5 8.5 0 0 1 0 17Z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}

/** A globe button that opens a menu on larger screens and a bottom sheet on phones. */
function LanguagePicker() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) menuRef.current?.querySelector<HTMLElement>('[aria-checked="true"]')?.focus();
  }, [open]);

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  const onMenuKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const items = [...e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitemradio"]')];
    const at = items.indexOf(document.activeElement as HTMLElement);
    const moves: Record<string, number> = {
      ArrowDown: (at + 1) % items.length,
      ArrowUp: (at - 1 + items.length) % items.length,
      Home: 0,
      End: items.length - 1,
    };
    if (e.key === "Escape") {
      close();
    } else if (e.key === "Tab") {
      setOpen(false);
    } else if (e.key in moves) {
      e.preventDefault();
      items[moves[e.key]].focus();
    }
  };

  return (
    <div className="lang-picker">
      <button
        ref={buttonRef}
        type="button"
        className="lang-button"
        aria-label={t.nav.language}
        aria-haspopup="menu"
        aria-expanded={open}
        title={t.nav.language}
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5s1.2-6.2 3.6-8.5Z" />
        </svg>
      </button>
      {open ? (
        <>
          {/* Closes on any tap outside; only dims the page on phones. */}
          <div className="lang-backdrop" onClick={close} />
          <div
            ref={menuRef}
            className="lang-menu"
            role="menu"
            aria-label={t.nav.language}
            onKeyDown={onMenuKeyDown}
          >
            <p className="lang-menu-title" aria-hidden="true">
              {t.nav.language}
            </p>
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                type="button"
                role="menuitemradio"
                aria-checked={l.code === lang}
                lang={l.code}
                onClick={() => {
                  setLang(l.code);
                  close();
                }}
              >
                {l.name}
                {l.code === lang ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                ) : null}
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function Nav() {
  const { t } = useI18n();
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top" aria-label={t.nav.home}>
          <img src="/images/logo.png" alt="TasteMates Labs" />
        </a>
        <div className="nav-right">
          <nav aria-label={t.nav.primary}>
            <a href="#apps">{t.nav.apps}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="nav-tools">
            <LanguagePicker />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

/** Lines of a heading, each ending in a forced break except the last. */
function Lines({ lines }: { lines: string[] }) {
  return lines.map((line, i) => (
    <span key={line}>
      {i > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-logo" src="/images/logo.png" alt="TasteMates Labs" />
      <h1 id="hero-title">
        <Lines lines={t.hero.title} />
      </h1>
      <p className="lede dark">{t.hero.lede}</p>
      <div className="actions">
        <a className="btn btn-dark" href="#apps">
          {t.hero.seeApps}
        </a>
        <a className="text-link" href="#contact">
          {t.hero.contact}
        </a>
      </div>
    </section>
  );
}

function AppsGrid() {
  const { t } = useI18n();
  const { products } = useProducts();
  return (
    <section className="band band-mist" id="apps" aria-labelledby="apps-title">
      <div className="wrap">
        <h2 id="apps-title" className="section-title center">
          {t.apps.title}
        </h2>
        <ul className="apps-grid">
          {products.map((p) =>
            p.status === "in-development" ? (
              <li className="app-card app-card-teaser" key={p.id}>
                {/* No icon yet: a line symbol stands in for one. */}
                <div className="teaser-tile" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    {p.glyph?.map((g) => (
                      <path key={g.d} d={g.d} className={g.fill ? "filled" : undefined} />
                    ))}
                  </svg>
                </div>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
                <span className="teaser-status">{t.apps.inDevelopment}</span>
              </li>
            ) : (
              <li className="app-card" key={p.id}>
                <img className="app-card-icon" src={p.icon} alt="" width={72} height={72} />
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
                <div className="app-card-actions">
                  {p.stores.map((s) => (
                    <StoreAction key={s.store} link={s} tone="dark" />
                  ))}
                </div>
                {p.showcase ? (
                  <a className="text-link" href={`#${p.id}`}>
                    {t.apps.learnMore(p.name)}
                  </a>
                ) : null}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}

function Showcase({ product }: { product: Product }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const show = product.showcase!;
  const [left, center, right] = show.shots;
  return (
    <>
      <section
        className="stage"
        id={product.id}
        aria-labelledby={`${product.id}-title`}
        style={{ "--accent": product.accent } as CSSProperties}
      >
        <div className="stage-head">
          <img className="app-icon" src={product.icon} alt="" width={96} height={96} />
          <h2 id={`${product.id}-title`}>{product.name}</h2>
          <p className="tagline">{product.tagline}</p>
          <p className="lede">{product.summary}</p>
          <div className="actions">
            {product.stores.map((s) => (
              <StoreAction key={s.store} link={s} tone="light" />
            ))}
          </div>
          {product.languageNote ? <p className="language-note">{product.languageNote}</p> : null}
        </div>

        <div ref={ref} className={`phones ${visible ? "is-visible" : ""}`}>
          <figure className="phone left">
            <img src={left.src} alt={left.alt} loading="lazy" decoding="async" />
          </figure>
          <figure className="phone center">
            <img src={center.src} alt={center.alt} loading="lazy" decoding="async" />
          </figure>
          <figure className="phone right">
            <img src={right.src} alt={right.alt} loading="lazy" decoding="async" />
          </figure>
        </div>

        <dl className="figures">
          {show.figures.map((f) => (
            <div key={f.label}>
              <dt>{f.value}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="band band-mist" aria-labelledby={`${product.id}-features`}>
        <div className="wrap">
          <h2 id={`${product.id}-features`} className="section-title">
            {show.featuresTitle}
          </h2>
          <div className="tiles">
            {show.features.map((f) => (
              <article className="tile" key={f.title}>
                <div className="tile-text">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
                <div className="tile-shot">
                  <img src={f.shot.src} alt={f.shot.alt} loading="lazy" decoding="async" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Privacy() {
  const { t } = useI18n();
  const { released } = useProducts();
  return (
    <section className="band" aria-labelledby="privacy-title">
      <div className="wrap narrow center">
        <h2 id="privacy-title" className="section-title">
          {t.privacy.title}
        </h2>
        <p className="lede dark">{t.privacy.lede}</p>
        <ul className="promises">
          {t.privacy.promises.map((promise) => (
            <li key={promise.title}>
              <strong>{promise.title}</strong>
              <span>{promise.body}</span>
            </li>
          ))}
        </ul>
        <p className="policy-links">
          {released.map((p, i) => (
            <span key={p.id}>
              {i > 0 ? ", " : ""}
              <a className="text-link" href={p.privacyUrl}>
                {t.privacy.policyLink(p.name)}
              </a>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section className="band band-mist" id="about" aria-labelledby="about-title">
      <div className="wrap about">
        <h2 id="about-title" className="section-title">
          <Lines lines={t.about.title} />
        </h2>
        <div className="about-body">
          {t.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="muted">{t.about.legal}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useI18n();
  return (
    <section className="band" id="contact" aria-labelledby="contact-title">
      <div className="wrap narrow center">
        <h2 id="contact-title" className="section-title">
          {t.contact.title}
        </h2>
        <p className="lede dark">{t.contact.lede}</p>
        <div className="actions">
          <a className="btn btn-dark" href={`mailto:${SUPPORT_EMAIL}`}>
            {t.contact.email(SUPPORT_EMAIL)}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  const { released } = useProducts();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div>
            <h3>{t.footer.apps}</h3>
            <ul>
              {released.map((p) => (
                <li key={p.id}>
                  <a href={p.showcase ? `#${p.id}` : "#apps"}>{p.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t.footer.legal}</h3>
            <ul>
              {released.map((p) => (
                <li key={p.id}>
                  <a href={p.privacyUrl}>{t.footer.policyLink(p.name)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t.footer.company}</h3>
            <ul>
              <li>
                <a href="#about">{t.footer.about}</a>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`}>{t.footer.contact}</a>
              </li>
            </ul>
          </div>
        </div>
        <p>{t.footer.copyright(new Date().getFullYear())}</p>
        <p>{t.footer.trademarks}</p>
      </div>
    </footer>
  );
}

function Page() {
  const { t } = useI18n();
  const { released } = useProducts();
  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <AppsGrid />
        {released
          .filter((p) => p.showcase)
          .map((p) => (
            <Showcase key={p.id} product={p} />
          ))}
        <Privacy />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [lang, setLangState] = useState<Lang>(readLang);
  const i18n = useMemo(() => {
    const setLang = (next: Lang) => {
      setLangState(next);
      try {
        localStorage.setItem("lang", next);
      } catch {
        // Storage can be blocked (private mode); the choice then lasts this visit.
      }
    };
    return { lang, setLang, t: stringsFor(lang) };
  }, [lang]);

  // Before paint, so the first frame already uses this language's fonts.
  useLayoutEffect(() => {
    document.documentElement.lang = lang;
    document.title = i18n.t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", i18n.t.meta.description);
  }, [lang, i18n.t]);

  return (
    <I18nContext.Provider value={i18n}>
      <Page />
    </I18nContext.Provider>
  );
}
