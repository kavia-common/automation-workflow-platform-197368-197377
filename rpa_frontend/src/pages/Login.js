import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import '../layout/ocean.css';

// PUBLIC_INTERFACE
export default function Login() {
  /**
   * Login screen that authenticates against backend and redirects to intended route.
   */
  const { login, isAuthenticated, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  if (isAuthenticated) {
    const redirectTo = location.state?.from?.pathname || '/dashboard';
    return <Navigate to={redirectTo} replace />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await login(email, password);
    if (ok) {
      const redirectTo = location.state?.from?.pathname || '/dashboard';
      navigate(redirectTo, { replace: true });
    }
  };

  return (
    <div className="layout" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <main className="card" style={{ width: 360 }}>
        <h2 style={{ marginTop: 0 }}>Welcome back</h2>
        <p className="subtitle">Sign in to continue</p>
        <form onSubmit={onSubmit}>
          <div className="space" />
          <label htmlFor="email">Email</label>
          <input id="email" className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" />
          <div className="space" />
          <label htmlFor="password">Password</label>
          <input id="password" className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" />
          <div className="space" />
          <button className="btn" type="submit" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
          {error && (
            <>
              <div className="space" />
              <div className="subtitle" style={{ color: 'var(--ocean-error)' }}>{error}</div>
            </>
          )}
        </form>
      </main>
    </div>
  );
}
