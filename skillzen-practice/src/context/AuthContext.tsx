import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface User {
  username: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  permissions: string[];
  login: (user: User, permissions: string[]) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [permissions, setPermissions] = useState<string[]>([]);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const storedPermissions = sessionStorage.getItem("permissions");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedPermissions) {
      setPermissions(JSON.parse(storedPermissions));
    }
  }, []);

  const login = (user: User, permissions: string[]) => {
    setUser(user);
    setPermissions(permissions);

    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem(
      "permissions",
      JSON.stringify(permissions)
    );
  };

  const logout = () => {
    setUser(null);
    setPermissions([]);

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("permissions");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        permissions,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}