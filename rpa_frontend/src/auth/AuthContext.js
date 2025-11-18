import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import api from '../api/client';

// PUBLIC_INTERFACE
export const AuthContext = createContext(null);

/**
 * Shape of auth user state. For MVP, we store token only.
 * You can extend with decoded JWT claims if backend provides user info.
 */

// PUBLIC_INTERFACE
export function useAuth() {
  /** Access auth context across the app. */
  return useContext(AuthContext);
}

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  /**
   * Provides authentication state and actions.
   * - Persists token in localStorage
   * - Restores token on load
   * - Exposes login/logout helpers
   */
  const [token, setToken] = useState(() => localStorage.getItem('auth_token'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Restore token on mount if present
  useEffect(() => {
    const existing = localStorage.getItem('auth_token');
    if (existing) {
      setToken(existing);
    }
  }, []);

  const isAuthenticated = !!token;

  // PUBLIC_INTERFACE
  const login = async (email, password) => {
    /**
     * Perform login using backend /auth/login endpoint.
     * On success, store JWT token to localStorage.
     */
    setLoading(true);
    setError(null);
    try {
      const res = await api.post('/auth/login', { email, password });
      const accessToken = res?.data?.access_token;
      if (!accessToken) throw new Error('Missing access token');
      localStorage.setItem('auth_token', accessToken);
      setToken(accessToken);
      return true;
    } catch (e) {
      const msg = e?.response?.data?.detail || e.message || 'Login failed';
      setError(msg);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // PUBLIC_INTERFACE
  const signup = async (email, password) => {
    /**
     * Perform signup via /auth/signup to create user and get token (if backend supports).
     */
    setLoading(true);
    setError(null);
    try {
      const res = await api.post('/auth/signup', { email, password });
      const accessToken = res?.data?.access_token;
      if (accessToken) {
        localStorage.setItem('auth_token', accessToken);
        setToken(accessToken);
      }
      return true;
    } catch (e) {
      const msg = e?.response?.data?.detail || e.message || 'Signup failed';
      setError(msg);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // PUBLIC_INTERFACE
  const logout = () => {
    /** Clear token and auth state. */
    localStorage.removeItem('auth_token');
    setToken(null);
  };

  const value = useMemo(
    () => ({ token, isAuthenticated, login, signup, logout, loading, error }),
    [token, isAuthenticated, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
