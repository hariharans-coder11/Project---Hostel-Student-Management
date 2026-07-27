import React, { createContext, useState, useEffect, useContext } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    const defaultHariharan = {
      id: '1',
      name: 'Hariharan',
      email: 'hariharan@student.edu',
      room: 'A-204',
      role: 'STUDENT',
    };

    if (storedUser && storedToken) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.name === 'Richard' || !parsed.name) {
          parsed.name = 'Hariharan';
          parsed.email = 'hariharan@student.edu';
          localStorage.setItem('user', JSON.stringify(parsed));
        }
        setUser(parsed);
        setToken(storedToken);
      } catch (e) {
        setUser(defaultHariharan);
        setToken('mock-jwt-token');
      }
    } else {
      setUser(defaultHariharan);
      setToken('mock-jwt-token');
      localStorage.setItem('user', JSON.stringify(defaultHariharan));
      localStorage.setItem('token', 'mock-jwt-token');
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authAPI.login({ email, password });
      const { user: userData, token: authToken } = response.data;
      setUser(userData);
      setToken(authToken);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', authToken);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Login failed' };
    }
  };

  const demoLogin = () => {
    const mockUser = {
      id: '1',
      name: 'Hariharan',
      email: 'hariharan@student.edu',
      room: 'A-204',
      role: 'STUDENT',
    };
    const mockToken = 'mock-jwt-token';
    setUser(mockUser);
    setToken(mockToken);
    localStorage.setItem('user', JSON.stringify(mockUser));
    localStorage.setItem('token', mockToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-800">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, token, login, demoLogin, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
