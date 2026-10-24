"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const copy = messages[locale].navigation;

  return (
    <div aria-label={copy.language} className="language-toggle" role="group">
      <button
        aria-label={copy.french}
        aria-pressed={locale === "fr-CA"}
        className={locale === "fr-CA" ? "is-active" : ""}
        onClick={() => setLocale("fr-CA")}
        type="button"
      >
        FR
      </button>
      <button
        aria-label={copy.english}
        aria-pressed={locale === "en"}
        className={locale === "en" ? "is-active" : ""}
        onClick={() => setLocale("en")}
        type="button"
      >
        EN
      </button>
    </div>
  );
}