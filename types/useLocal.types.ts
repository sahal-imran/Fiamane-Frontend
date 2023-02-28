interface ILocaleContext {
  locale: string;
}

type LocaleProviderProps = {
  children: React.ReactNode;
};

export type { ILocaleContext, LocaleProviderProps };
