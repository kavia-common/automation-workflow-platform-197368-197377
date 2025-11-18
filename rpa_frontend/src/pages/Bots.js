import React, { useEffect, useState } from 'react';
import api from '../api/client';

// PUBLIC_INTERFACE
export default function Bots() {
  /** Displays list of bots from backend. */
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/bots/').then(res => setItems(res.data || [])).catch(() => setItems([]));
  }, []);

  return (
    <div className="card">
      <h3>Bots</h3>
      {items.length === 0 && <p className="subtitle">No bots found.</p>}
      {items.map(b => (
        <div key={b.id} style={{ padding: '8px 0', borderBottom: '1px solid var(--ocean-border)' }}>
          <strong>{b.name}</strong> <span className="subtitle">#{b.id} • {b.status}</span>
        </div>
      ))}
    </div>
  );
}
