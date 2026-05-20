"use client";

import { getCurrentUser } from "@/services/auth.service";
import { createContext, useState, ReactNode, useEffect } from "react";

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
  logout: () => void;
  loading: boolean;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        setAccessToken(token);
        const userData = await getCurrentUser();
        setUser(userData);
      }
      setLoading(false);
    };
    loadUser()
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        logout,
        loading,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
