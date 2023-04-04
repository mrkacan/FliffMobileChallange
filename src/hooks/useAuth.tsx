import React, {createContext, useState, useContext, useMemo} from 'react';

type username = string | null;
interface AuthContextData {
  username: username;
  login: (value: username) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextData | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [username, setUsername] = useState<username>(null);

  const isLoggedIn = useMemo(() => !!username, [username]);

  const login = (value: username) => {
    setUsername(value);
  };

  const logout = () => {
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{username, login, logout, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuth};
