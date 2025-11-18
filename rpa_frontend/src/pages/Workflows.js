import React, { useEffect, useState } from 'react';
import { useApi } from '../api';

// PUBLIC_INTERFACE
export default function Workflows() {
  /** Displays list of workflows fetched from mock/real API with pagination placeholder. */
  const api = useApi();
  const [page, setPage] = useState(1);
  const [resp, setResp] = useState({ items: [], total: 0, totalPages: 1 });
  const [loading, setLoading] = useState(false);

  const fetchWorkflows = async (p = page) => {
    setLoading(true);
    try {
      const data = await api.listWorkflows({ page: p, pageSize: 8 });
      // Support either array or paged object from real backend
      if (Array.isArray(data)) {
        setResp({ items: data, total: data.length, totalPages: 1 });
      } else {
        setResp(data);
      }
      setPage(p);
    } catch (e) {
      setResp({ items: [], total: 0, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkflows(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0 }}>Workflows</h3>
        <button className="btn" onClick={() => fetchWorkflows(page)} disabled={loading}>
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
      <div className="space" />
      {resp.items.length === 0 && <p className="subtitle">No workflows found.</p>}
      {resp.items.map(w => (
        <div key={w.id} className="row" style={{ justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--ocean-border)' }}>
          <div>
            <strong>{w.name}</strong>
            <div className="subtitle">{w.description || '—'}</div>
          </div>
          <div className="row">
            <button className="btn secondary">Open</button>
          </div>
        </div>
      ))}
      <div className="row" style={{ justifyContent: 'flex-end', marginTop: 12 }}>
        <button className="btn secondary" disabled={page <= 1 || loading} onClick={() => fetchWorkflows(page - 1)}>Prev</button>
        <button className="btn" disabled={page >= resp.totalPages || loading} onClick={() => fetchWorkflows(page + 1)}>Next</button>
      </div>
    </div>
  );
}
