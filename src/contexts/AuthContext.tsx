import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: { username: string } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Temporary hardcoded credentials for development
const TEMP_CREDENTIALS = { username: "rajesh", password: "rajesh" };

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("shopLease_auth");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("shopLease_auth");
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === TEMP_CREDENTIALS.username && password === TEMP_CREDENTIALS.password) {
      const userData = { username };
      setUser(userData);
      localStorage.setItem("shopLease_auth", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("shopLease_auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
