import { AuthProvider } from "hooks/useAuth";
import { LocaleProvider } from "hooks/useLocale";
import { TranslationsProvider } from "hooks/useTranslation";
import type { AppProps } from "next/app";
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <LocaleProvider>
        <TranslationsProvider>
          <Component {...pageProps} />
        </TranslationsProvider>
      </LocaleProvider>
    </AuthProvider>
  );
}
