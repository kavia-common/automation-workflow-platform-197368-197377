import React from 'react';
import { workflows } from '../mocks/workflows';

// PUBLIC_INTERFACE
export default function WorkflowBuilder() {
  /** Placeholder for a visual workflow builder. Renders a mock workflow JSON preview. */
  const sample = workflows[0];

  return (
    <div className="card">
      <h3>Workflow Builder</h3>
      <p className="subtitle">Design and configure your automation workflow here.</p>
      <div style={{ marginTop: 12, padding: 12, border: '1px dashed var(--ocean-border)', borderRadius: 10, background: '#fafbff' }}>
        <strong>Canvas</strong>
        <div className="subtitle">Drag steps here (placeholder)</div>
        <pre style={{ marginTop: 12, whiteSpace: 'pre-wrap' }}>{JSON.stringify(sample, null, 2)}</pre>
      </div>
    </div>
  );
}
