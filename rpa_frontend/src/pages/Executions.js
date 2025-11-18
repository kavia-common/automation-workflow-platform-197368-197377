import React, { useEffect, useState } from 'react';
import { useApi } from '../api';

// PUBLIC_INTERFACE
export default function Executions() {
  /** Lists executions using mock/real API with pagination placeholder. */
  const api = useApi();
  const [page, setPage] = useState(1);
  const [resp, setResp] = useState({ items: [], totalPages: 1 });
  const [loading, setLoading] = useState(false);

  const fetchExecutions = async (p = page) => {
    setLoading(true);
    try {
      const data = await api.listExecutions({ page: p, pageSize: 10 });
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
    fetchExecutions(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0 }}>Executions</h3>
        <button className="btn" disabled={loading} onClick={() => fetchExecutions(page)}>
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
      <div className="space" />
      {resp.items.length === 0 && <p className="subtitle">No executions yet.</p>}
      {resp.items.map(x => (
        <div key={x.id} style={{ padding: '8px 0', borderBottom: '1px solid var(--ocean-border)' }}>
          <strong>Execution #{x.id}</strong> <span className="subtitle">Workflow #{x.workflow_id} • {x.status}</span>
        </div>
      ))}
      <div className="row" style={{ justifyContent: 'flex-end', marginTop: 12 }}>
        <button className="btn secondary" disabled={page <= 1 || loading} onClick={() => fetchExecutions(page - 1)}>Prev</button>
        <button className="btn" disabled={page >= resp.totalPages || loading} onClick={() => fetchExecutions(page + 1)}>Next</button>
      </div>
    </div>
  );
}
