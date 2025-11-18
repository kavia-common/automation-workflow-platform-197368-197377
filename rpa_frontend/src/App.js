import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './layout/AppLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Workflows from './pages/Workflows';
import WorkflowBuilder from './pages/WorkflowBuilder';
import Bots from './pages/Bots';
import Schedules from './pages/Schedules';
import Executions from './pages/Executions';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Login from './pages/Login';

// PUBLIC_INTERFACE
function App() {
  /** Root application component that sets up routing and auth provider. */
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/workflows" element={<Workflows />} />
                <Route path="/workflows/builder" element={<WorkflowBuilder />} />
                <Route path="/bots" element={<Bots />} />
                <Route path="/schedules" element={<Schedules />} />
                <Route path="/executions" element={<Executions />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
