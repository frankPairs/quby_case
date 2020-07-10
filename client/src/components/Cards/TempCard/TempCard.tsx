import React from 'react';
import dayjs from 'dayjs';

import { TempCardStyled } from './TempCard.styled';

interface Props {
  label: string;
  temperature: number | null;
  lastUpdateAt: Date | null;
}

function TempCard({ label, temperature, lastUpdateAt }: Props) {
  return (
    <TempCardStyled>
      <h2 className="title">{label}</h2>
      <p className="temperature">{temperature ? `${temperature}C°` : '-'}</p>
      <p className="date">{lastUpdateAt ? `Latest Update: ${dayjs(lastUpdateAt).format('HH:mm:ss')}` : '-'}</p>
    </TempCardStyled>
  );
}

export { TempCard };
