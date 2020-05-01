import React, { createContext, useCallback } from 'react';

interface AuthContextData {
  name: string;
  signIn(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('SignIn');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Anderson', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
