import React from 'react';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Topbar() {
  /** Top application bar with quick actions; no auth controls in public mode. */
  const navigate = useNavigate();

  return (
    <header className="topbar" role="banner">
      <div className="row">
        <strong>Automation Workflow Platform</strong>
        <span className="subtitle">Ocean Professional</span>
      </div>
      <div className="row">
        <button className="btn secondary" onClick={() => navigate('/workflows/builder')}>+ New Workflow</button>
      </div>
    </header>
  );
}
