import messages from "config/messages";
import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import { ILocaleContext, LocaleProviderProps } from "types/useLocal.types";

const LocaleContext = createContext<ILocaleContext>({
  locale: "fr",
});

/**
 * Locale provider
 */
const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const { locale } = useRouter();
  const defaultLocale = Object.keys(messages).includes(locale as string)
    ? locale
    : "fr";

  return (
    <LocaleContext.Provider value={{ locale: defaultLocale as string }}>
      {children}
    </LocaleContext.Provider>
  );
};

/**
 * Locale hook
 * @returns {string} - Current locale
 */
const useLocale = (): string => {
  const { locale } = useContext(LocaleContext);
  return locale;
};

export { LocaleProvider, useLocale };
