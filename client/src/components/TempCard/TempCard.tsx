import React from 'react';

interface Props {
  label: string;
  temperature: number | null;
  lastUpdateAt: Date | null;
}

function TempCard({ label, temperature, lastUpdateAt }: Props) {
  return (
    <div>
      <h2>{label}</h2>
      <p>{temperature || '-'}</p>
      <p>{lastUpdateAt || '-'}</p>
    </div>
  );
}

export { TempCard };
