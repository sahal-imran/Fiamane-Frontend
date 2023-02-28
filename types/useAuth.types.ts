interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
  user: any;
  setUser: (user: any) => void;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

export type { IAuthContext, AuthProviderProps };
