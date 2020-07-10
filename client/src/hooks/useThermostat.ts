import { useEffect, useState } from 'react';

import { Thermostat } from '../types';
import { createPoll } from '../utils/poll';
import { getTemperature, patchTemperature } from '../services';

function useThermostat(): [Thermostat, (newTemp: number) => void] {
  const [tempData, setTemperature] = useState<Thermostat>({
    temperature: null,
    setpoint: null,
    lastUpdateAt: null,
  });
  const poll = createPoll(async () => {
    const data = await getTemperature(poll.restart);

    setTemperature(data);
  }, 2000);

  useEffect(function pollTemperature() {
    poll.start();

    return poll.cancel;
  }, []);

  function updateSetpoint(newTemp: number) {
    patchTemperature(newTemp);
  }

  return [tempData, updateSetpoint];
}

export { useThermostat };
