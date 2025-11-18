import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

// PUBLIC_INTERFACE
export default function Topbar() {
  /** Top application bar with actions and account area. */
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <header className="topbar" role="banner">
      <div className="row">
        <strong>Automation Workflow Platform</strong>
        <span className="subtitle">Ocean Professional</span>
      </div>
      <div className="row">
        <button className="btn secondary" onClick={() => navigate('/workflows/builder')}>+ New Workflow</button>
        <button className="btn" onClick={handleLogout} aria-label="Logout">Logout</button>
      </div>
    </header>
  );
}
