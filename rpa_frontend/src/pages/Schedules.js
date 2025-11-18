import React, { useEffect, useState } from 'react';
import { useApi } from '../api';

// PUBLIC_INTERFACE
export default function Schedules() {
  /** Lists schedules from mock/real API with pagination placeholder. */
  const api = useApi();
  const [page, setPage] = useState(1);
  const [resp, setResp] = useState({ items: [], totalPages: 1 });
  const [loading, setLoading] = useState(false);

  const fetchSchedules = async (p = page) => {
    setLoading(true);
    try {
      const data = await api.listSchedules({ page: p, pageSize: 10 });
      if (Array.isArray(data)) setResp({ items: data, totalPages: 1 });
      else setResp(data);
      setPage(p);
    } catch {
      setResp({ items: [], totalPages: 1 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0 }}>Schedules</h3>
        <button className="btn" disabled={loading} onClick={() => fetchSchedules(page)}>
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
      <div className="space" />
      {resp.items.length === 0 && <p className="subtitle">No schedules found.</p>}
      {resp.items.map(s => (
        <div key={s.id} style={{ padding: '8px 0', borderBottom: '1px solid var(--ocean-border)' }}>
          <strong>Workflow #{s.workflow_id}</strong> <span className="subtitle">{s.cron} • {s.is_active ? 'Active' : 'Inactive'}</span>
        </div>
      ))}
      <div className="row" style={{ justifyContent: 'flex-end', marginTop: 12 }}>
        <button className="btn secondary" disabled={page <= 1 || loading} onClick={() => fetchSchedules(page - 1)}>Prev</button>
        <button className="btn" disabled={page >= resp.totalPages || loading} onClick={() => fetchSchedules(page + 1)}>Next</button>
      </div>
    </div>
  );
}
