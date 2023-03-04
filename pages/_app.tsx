import { AuthProvider } from "hooks/useAuth";
import { LocaleProvider } from "hooks/useLocale";
import { TranslationsProvider } from "hooks/useTranslation";
import type { AppProps } from "next/app";
import "../styles/fonts.css";
import "../styles/globals.css"
import Layout from "layouts/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <LocaleProvider>
        <TranslationsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TranslationsProvider>
      </LocaleProvider>
    </AuthProvider>
  );
}
