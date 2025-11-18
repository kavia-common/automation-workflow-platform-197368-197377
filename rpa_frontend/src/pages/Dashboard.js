import React, { useEffect, useState } from 'react';
import { useApi } from '../api';

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Overview dashboard with quick stats and health ping from mock/real API. */
  const api = useApi();
  const [health, setHealth] = useState(null);
  const [kpis, setKpis] = useState({ workflows: 0, botsOnline: 0, executionsToday: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const [h, wfPage, botsPage, execPage] = await Promise.all([
          api.health(),
          api.listWorkflows({ page: 1, pageSize: 100 }),
          api.listBots({ page: 1, pageSize: 100 }),
          api.listExecutions({ page: 1, pageSize: 100 }),
        ]);
        if (!mounted) return;
        const botsOnline = (botsPage.items || botsPage || []).filter(b => b.status === 'online').length;
        const executionsToday = (execPage.items || execPage || []).filter(e => ['succeeded', 'failed', 'running', 'queued'].includes(e.status)).length;
        setHealth(h);
        setKpis({
          workflows: (wfPage.items ? wfPage.items.length : wfPage.length) || 0,
          botsOnline,
          executionsToday,
        });
      } catch (e) {
        if (!mounted) return;
        setHealth({ status: 'unavailable' });
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [api]);

  return (
    <div className="grid">
      <div className="card">
        <h3>Backend Health</h3>
        <p className="subtitle">Status: {health ? JSON.stringify(health) : 'Checking…'}</p>
      </div>
      <div className="card">
        <h3>KPIs</h3>
        {loading ? (
          <p className="subtitle">Loading KPIs…</p>
        ) : (
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div><strong>{kpis.workflows}</strong><div className="subtitle">Workflows</div></div>
            <div><strong>{kpis.botsOnline}</strong><div className="subtitle">Bots Online</div></div>
            <div><strong>{kpis.executionsToday}</strong><div className="subtitle">Executions</div></div>
          </div>
        )}
      </div>
      <div className="card">
        <h3>Quick Actions</h3>
        <p className="subtitle">Create workflows, manage bots, and track executions.</p>
      </div>
    </div>
  );
}
