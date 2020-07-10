import React, { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import debounce from 'lodash/debounce';

import { ArrowDown, ArrowUp } from '../../Icons';
import { TempEditableCardStyled } from './TempEditableCard.styled';

interface Props {
  label: string;
  temperature: number | null;
  lastUpdateAt: Date | null;
  onChangeTemp: (temp: number) => void;
}

function TempEditableCard({ label, temperature, lastUpdateAt, onChangeTemp }: Props) {
  const [temp, setTemp] = useState<number | null>(null);
  const debounceChangeTemp = useCallback(debounce(onChangeTemp, 500), []);

  useEffect(() => {
    if (temperature && !temp) {
      setTemp(temperature);
    }
  }, [temperature]);

  function handleIncrementTemp() {
    setTemp((prevTemp) => {
      if (!prevTemp) {
        return prevTemp;
      }

      const nextTemp = prevTemp + 0.5;

      debounceChangeTemp(nextTemp);
      return nextTemp;
    });
  }

  function handleDecrmentTemp() {
    setTemp((prevTemp) => {
      if (!prevTemp) {
        return prevTemp;
      }

      const nextTemp = prevTemp - 0.5;

      debounceChangeTemp(nextTemp);
      return nextTemp;
    });
  }

  return (
    <TempEditableCardStyled>
      <h2 className="title">{label}</h2>
      <div className="content-wrapper">
        <p className="temperature">{temp ? `${temp}C°` : '-'}</p>
        <div className="buttons-wrapper">
          <ArrowUp className="button" onClick={handleIncrementTemp} width="40px" height="40px" />
          <ArrowDown className="button" onClick={handleDecrmentTemp} width="40px" height="40px" />
        </div>
      </div>

      <p className="date">{lastUpdateAt ? `Latest Update: ${dayjs(lastUpdateAt).format('HH:mm:ss')}` : '-'}</p>
    </TempEditableCardStyled>
  );
}

export { TempEditableCard };
