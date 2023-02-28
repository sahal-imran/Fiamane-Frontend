import messages from "config/messages";
import { IntlProvider, useIntl } from "react-intl";
import { TranslationsProviderProps } from "types/useTranslation.types";
import { flattenObject } from "utils/functions";
import { useLocale } from "./useLocale";

/**
 * Translations hook
 * @param messages - Object containing all the translations
 * @returns
 */
export const useTranslation = () => {
  const intl = useIntl();
  return (id: string) => intl.formatMessage({ id });
};

/**
 * Translations provider
 */
export const TranslationsProvider = ({
  children,
}: TranslationsProviderProps) => {
  const locale = useLocale();
  return (
    <IntlProvider
      locale={locale}
      messages={flattenObject(messages[locale as keyof typeof messages])}
    >
      {children}
    </IntlProvider>
  );
};
