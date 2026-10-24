"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { messages } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "alexistrudeau-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr-CA");

  useEffect(() => {
    try {
      const savedLocale = window.localStorage.getItem(storageKey);
      if (savedLocale === "fr-CA" || savedLocale === "en") {
        setLocaleState(savedLocale);
      }
    } catch {
      // Keep the default locale when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = messages[locale].metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", messages[locale].metadata.description);
  }, [locale]);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem(storageKey, nextLocale);
    } catch {
      // Language selection still works for the current page view.
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}