import { createContext, useContext, useState } from "react";
import { login } from "../api/auth.api";
import { setToken } from "../api/client";
import {User} from "../models/user";

interface AuthContextType {
  user: User | null;
  loginUser: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  const loginUser = async (email: string, password: string) => {
    const data = await login(email, password);
    setToken(data.accessToken);
    localStorage.setItem("token", data.accessToken);
    setUser(data.user);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);