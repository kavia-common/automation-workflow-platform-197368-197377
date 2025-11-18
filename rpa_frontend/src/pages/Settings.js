import React, { useEffect, useState } from 'react';
import { useApi } from '../api';

// PUBLIC_INTERFACE
export default function Settings() {
  /** Displays application settings from mock/real API. */
  const api = useApi();
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    api.getSettings().then(s => { if (mounted) setData(s); });
    return () => { mounted = false; };
  }, [api]);

  return (
    <div className="card">
      <h3>Settings</h3>
      {!data && <p className="subtitle">Loading settings…</p>}
      {data && (
        <div className="row" style={{ gap: 24 }}>
          <div>
            <strong>Theme</strong>
            <div className="subtitle">{data.theme}</div>
          </div>
          <div>
            <strong>Notifications</strong>
            <div className="subtitle">{data.notifications ? 'Enabled' : 'Disabled'}</div>
          </div>
          <div>
            <strong>Telemetry</strong>
            <div className="subtitle">{data.telemetry ? 'On' : 'Off'}</div>
          </div>
          <div>
            <strong>Default page size</strong>
            <div className="subtitle">{data.defaultPageSize}</div>
          </div>
        </div>
      )}
    </div>
  );
}
