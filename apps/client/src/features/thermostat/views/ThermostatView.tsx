import React from 'react';

import { TempEditableCard, TempCard } from '../components';
import { useThermostat } from '../hooks';
import { WrapperStyled } from './ThermostatView.styled';

function ThermostatView() {
  const [{ data }, { cancelRequests, updateSetpoint }] = useThermostat();

  return (
    <WrapperStyled>
      <TempCard label="Current" temperature={data.temperature} lastUpdateAt={data.lastUpdateAt} />
      <TempEditableCard
        label="Set Point"
        temperature={data.setpoint}
        lastUpdateAt={data.lastUpdateAt}
        limits={{ min: 15, max: 25 }}
        onDecreaseTemp={cancelRequests}
        onIncreaseTemp={cancelRequests}
        onChangeTemp={updateSetpoint}
      />
    </WrapperStyled>
  );
}

export { ThermostatView };
