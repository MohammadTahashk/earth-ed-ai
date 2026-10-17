import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type DemoUser = {
  id: string;
  email: string;
  fullName: string;
};

type AuthContextType = {
  user: DemoUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string) => void;
  signup: (email: string, fullName: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const USER_KEY = 'earth-ed-demo-user';
const SESSION_KEY = 'earth-ed-demo-session';

const readStoredUser = (): DemoUser | null => {
  try {
    const storedUser = localStorage.getItem(USER_KEY);
    const hasSession = localStorage.getItem(SESSION_KEY) === 'active';
    return storedUser && hasSession ? JSON.parse(storedUser) as DemoUser : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(readStoredUser());
    setLoading(false);
  }, []);

  const startSession = (email: string, fullName: string) => {
    const demoUser = {
      id: `demo-${Date.now()}`,
      email,
      fullName,
    };
    localStorage.setItem(USER_KEY, JSON.stringify(demoUser));
    localStorage.setItem(SESSION_KEY, 'active');
    setUser(demoUser);
  };

  const login = (email: string) => {
    const storedUser = localStorage.getItem(USER_KEY);
    const fullName = storedUser ? (JSON.parse(storedUser) as DemoUser).fullName : email.split('@')[0];
    startSession(email, fullName || 'Eco learner');
  };

  const signup = (email: string, fullName: string) => {
    startSession(email, fullName);
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
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
