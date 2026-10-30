import { useEffect, useRef, useState, type CSSProperties } from "react";
import { PRODUCTS, RELEASED, STORE_LABEL, type Product, type StoreLink } from "./products";

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
  const where = STORE_LABEL[link.store];
  if ("comingSoon" in link) {
    return <span className={`soon soon-${tone}`}>Coming soon to {where}</span>;
  }
  const verb = link.store === "app-store" ? "Download on" : "Get it on";
  return (
    <a
      className={`btn ${tone === "light" ? "btn-light" : "btn-dark"}`}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {verb} {where}
    </a>
  );
}

type ThemeChoice = "system" | "light" | "dark";
const THEME_ORDER: ThemeChoice[] = ["system", "light", "dark"];
const THEME_LABEL: Record<ThemeChoice, string> = {
  system: "Appearance: match system",
  light: "Appearance: light",
  dark: "Appearance: dark",
};

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
      aria-label={`${THEME_LABEL[theme]}. Switch to ${next}.`}
      title={THEME_LABEL[theme]}
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

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top" aria-label="TasteMates Labs home">
          <img src="/images/logo.png" alt="TasteMates Labs" />
        </a>
        <div className="nav-right">
          <nav aria-label="Primary">
            <a href="#apps">Apps</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-logo" src="/images/logo.png" alt="TasteMates Labs" />
      <h1 id="hero-title">
        Software worth
        <br />
        opening twice.
      </h1>
      <p className="lede dark">
        TasteMates Labs builds focused, private apps that are a pleasure to
        come back to.
      </p>
      <div className="actions">
        <a className="btn btn-dark" href="#apps">
          See our apps
        </a>
        <a className="text-link" href="#contact">
          Contact us
        </a>
      </div>
    </section>
  );
}

function AppsGrid() {
  return (
    <section className="band band-mist" id="apps" aria-labelledby="apps-title">
      <div className="wrap">
        <h2 id="apps-title" className="section-title center">
          Our apps.
        </h2>
        <ul className="apps-grid">
          {PRODUCTS.map((p) =>
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
                <span className="teaser-status">In development</span>
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
                    Learn more about {p.name}
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
  return (
    <section className="band" aria-labelledby="privacy-title">
      <div className="wrap narrow center">
        <h2 id="privacy-title" className="section-title">
          Private by design.
        </h2>
        <p className="lede dark">
          Our apps work without an account and keep your data on your device.
          We don't run ads, we don't track you, and we don't sell your data.
        </p>
        <ul className="promises">
          <li>
            <strong>No account</strong>
            <span>Open the app and start.</span>
          </li>
          <li>
            <strong>No tracking</strong>
            <span>No analytics, no advertising ID.</span>
          </li>
          <li>
            <strong>Your data stays yours</strong>
            <span>Progress is stored on your device.</span>
          </li>
        </ul>
        <p className="policy-links">
          {RELEASED.map((p, i) => (
            <span key={p.id}>
              {i > 0 ? ", " : ""}
              <a className="text-link" href={p.privacyUrl}>
                {p.name} privacy policy
              </a>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="band band-mist" id="about" aria-labelledby="about-title">
      <div className="wrap about">
        <h2 id="about-title" className="section-title">
          About
          <br />
          TasteMates Labs.
        </h2>
        <div className="about-body">
          <p>
            TasteMates Labs is a software company that designs and publishes
            apps for learning and everyday life. We keep our catalog small so
            that every app gets the attention it deserves: thoughtful design,
            careful updates and real answers when you write to us.
          </p>
          <p>
            Each app we publish follows the same principles. It does one job
            well, it respects your privacy, and it works without asking you to
            sign up.
          </p>
          <p className="muted">
            TasteMates Labs LLC is a limited liability company registered in
            Pennsylvania, United States.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="band" id="contact" aria-labelledby="contact-title">
      <div className="wrap narrow center">
        <h2 id="contact-title" className="section-title">
          Get in touch.
        </h2>
        <p className="lede dark">
          For app support, feedback and business inquiries, email us and we'll
          get back to you.
        </p>
        <div className="actions">
          <a className="btn btn-dark" href={`mailto:${SUPPORT_EMAIL}`}>
            Email {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div>
            <h3>Apps</h3>
            <ul>
              {RELEASED.map((p) => (
                <li key={p.id}>
                  <a href={p.showcase ? `#${p.id}` : "#apps"}>{p.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              {RELEASED.map((p) => (
                <li key={p.id}>
                  <a href={p.privacyUrl}>{p.name} Privacy Policy</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} TasteMates Labs LLC. All rights reserved.
        </p>
        <p>Google Play is a trademark of Google LLC. App Store is a service mark of Apple Inc.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <AppsGrid />
        {RELEASED.filter((p) => p.showcase).map((p) => (
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
