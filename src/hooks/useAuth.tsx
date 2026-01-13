import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user database
const MOCK_USERS: { email: string; password: string; name: string }[] = [
  { email: 'mailtrash939@gmail.com', password: '12345678', name: 'John Doe' }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Check mock users
    const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    // Also check localStorage for registered users
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const registeredUser = registeredUsers.find((u: any) => u.email === email && u.password === password);
    
    const matchedUser = foundUser || registeredUser;
    
    if (matchedUser) {
      const userData: User = {
        id: btoa(matchedUser.email),
        email: matchedUser.email,
        name: matchedUser.name
      };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Check if user already exists
    const existingMock = MOCK_USERS.find(u => u.email === email);
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const existingRegistered = registeredUsers.find((u: any) => u.email === email);
    
    if (existingMock || existingRegistered) {
      return false;
    }
    
    // Register new user
    registeredUsers.push({ email, password, name });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    const userData: User = {
      id: btoa(email),
      email,
      name
    };
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
