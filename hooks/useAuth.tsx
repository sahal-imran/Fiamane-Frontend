import { createContext, useContext, useEffect, useState } from "react";
import { AuthProviderProps, IAuthContext } from "types/useAuth.types";

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => { },
  logout: () => { },
  user: null,
  setUser: () => { },
});

/**
 * Auth provider
 */
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // handle the authentication
    // TODO : call /me endpoint
  }, []);

  const logout = () => {
    // handle the logout
    // TODO : call /logout endpoint
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Auth hook
 * @returns {React.ContextType<typeof AuthContext>} - Auth context
 */
const useAuth = (): React.ContextType<typeof AuthContext> => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
