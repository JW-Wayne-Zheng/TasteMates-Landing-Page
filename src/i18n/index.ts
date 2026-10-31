import { createContext, useContext } from "react";
import { de } from "./de";
import { en, type Strings } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { ja } from "./ja";
import { ko } from "./ko";
import { ptBR } from "./pt-BR";
import { zhHans } from "./zh-Hans";
import { zhHant } from "./zh-Hant";

/** Each code is also the page's `<html lang>`. Names are shown in their own language. */
export const LANGUAGES = [
  { code: "en", name: "English", strings: en },
  { code: "zh-Hans", name: "简体中文", strings: zhHans },
  { code: "zh-Hant", name: "繁體中文", strings: zhHant },
  { code: "ja", name: "日本語", strings: ja },
  { code: "ko", name: "한국어", strings: ko },
  { code: "es", name: "Español", strings: es },
  { code: "fr", name: "Français", strings: fr },
  { code: "de", name: "Deutsch", strings: de },
  { code: "pt-BR", name: "Português (Brasil)", strings: ptBR },
] as const;

export type Lang = (typeof LANGUAGES)[number]["code"];

export function stringsFor(lang: Lang): Strings {
  return LANGUAGES.find((l) => l.code === lang)!.strings;
}

const isLang = (code: string | null): code is Lang => LANGUAGES.some((l) => l.code === code);

/** The visitor's saved choice, else their browser's first language we offer, else English. */
export function readLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (isLang(saved)) return saved;
  } catch {
    // Storage can be blocked (private mode); fall through to the browser's languages.
  }
  for (const tag of navigator.languages ?? []) {
    // Match on the base language, so es-MX reads Spanish and pt-PT reads Portuguese.
    const base = tag.toLowerCase().split("-")[0];
    // Chinese is the exception: the script or region decides which one to read.
    if (base === "zh") return /-(hant|tw|hk|mo)\b/i.test(tag) ? "zh-Hant" : "zh-Hans";
    const match = LANGUAGES.find((l) => l.code.toLowerCase().split("-")[0] === base);
    if (match) return match.code;
  }
  return "en";
}

export type I18n = { lang: Lang; setLang: (lang: Lang) => void; t: Strings };

export const I18nContext = createContext<I18n>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export const useI18n = () => useContext(I18nContext);
