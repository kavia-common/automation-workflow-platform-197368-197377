import React, { useEffect, useState } from 'react';
import { useApi } from '../api';

// PUBLIC_INTERFACE
export default function Users() {
  /** Simple users list from mock API. */
  const api = useApi();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api.listUsers().then(data => { if (mounted) setItems(data); }).finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [api]);

  return (
    <div className="card">
      <h3>Users</h3>
      {loading && <p className="subtitle">Loading…</p>}
      {!loading && items.length === 0 && <p className="subtitle">No users found.</p>}
      {items.map(u => (
        <div key={u.id} className="row" style={{ padding: '8px 0', borderBottom: '1px solid var(--ocean-border)', justifyContent: 'space-between' }}>
          <div>
            <strong>{u.name}</strong>
            <div className="subtitle">{u.email}</div>
          </div>
          <span className="subtitle">{u.role}</span>
        </div>
      ))}
    </div>
  );
}
