import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  loginAsAdmin: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const loginAsAdmin = () => {
    setIsAdmin(true);
    console.log("Logged in as admin");
  };

  const logout = () => {
    setIsAdmin(false);
    console.log("Logged out");
  };

  return (
    <AuthContext.Provider value={{ isAdmin, loginAsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
