import React, { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import debounce from 'lodash/debounce';

import { ArrowDown, ArrowUp } from '../../../components/Icons';
import { TempEditableCardStyled } from './TempEditableCard.styled';

interface Props {
  label: string;
  temperature: number | null;
  lastUpdateAt: Date | null;
  limits: { min: number; max: number };
  onChangeTemp: (temp: number) => void;
  onDecreaseTemp: () => void;
  onIncreaseTemp: () => void;
}

function TempEditableCard({
  label,
  temperature,
  lastUpdateAt,
  limits,
  onChangeTemp,
  onDecreaseTemp,
  onIncreaseTemp,
}: Props) {
  const [temp, setTemp] = useState<number | null>(null);
  const debounceChangeTemp = useCallback(debounce(onChangeTemp, 500), []);

  useEffect(
    function initTempState() {
      setTemp(temperature);
    },
    [temperature],
  );

  function handleIncrementTemp() {
    setTemp((prevTemp) => {
      if (!prevTemp) {
        return prevTemp;
      }

      const nextTemp = prevTemp + 0.5;

      if (nextTemp > limits.max) {
        return prevTemp;
      }

      onIncreaseTemp();
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

      if (nextTemp < limits.min) {
        return prevTemp;
      }

      onDecreaseTemp();
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
          <ArrowUp
            className="button"
            data-testid="increase-button"
            onClick={handleIncrementTemp}
            width="40px"
            height="40px"
          />
          <ArrowDown
            className="button"
            data-testid="decrease-button"
            onClick={handleDecrmentTemp}
            width="40px"
            height="40px"
          />
        </div>
      </div>

      <p className="date">{lastUpdateAt ? `Latest Update: ${dayjs(lastUpdateAt).format('HH:mm:ss')}` : '-'}</p>
    </TempEditableCardStyled>
  );
}

export { TempEditableCard };
