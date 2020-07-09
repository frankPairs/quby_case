import React from 'react';

import { TempCard } from './components';
import { useThermostat } from './hooks';

function App() {
  const { temperature, setpoint, lastUpdateAt } = useThermostat();

  return (
    <div>
      <h1>Thermostat</h1>

      <TempCard label="Current Temperature" temperature={temperature} lastUpdateAt={lastUpdateAt} />
      <TempCard label="Set Point" temperature={setpoint} lastUpdateAt={lastUpdateAt} />
    </div>
  );
}

export { App };
