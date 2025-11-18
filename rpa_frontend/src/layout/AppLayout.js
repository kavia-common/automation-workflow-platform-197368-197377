import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './ocean.css';

// PUBLIC_INTERFACE
export default function AppLayout() {
  /** Shell layout that renders Sidebar, Topbar, and main content area. */
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Topbar />
        <main className="main-surface">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
