import { useEffect, useState } from 'react';

import { Thermostat } from '../types';
import { createPoll } from '../utils/poll';
import { getTemperature } from '../services';

function useThermostat() {
  const [tempData, setTemperature] = useState<Thermostat>({
    temperature: null,
    setpoint: null,
    lastUpdateAt: null,
  });

  useEffect(function pollTemperature() {
    const poll = createPoll(async () => {
      const data = await getTemperature(poll.restart);

      setTemperature(data);
    }, 2000);

    poll.start();

    return poll.cancel;
  }, []);

  return tempData;
}

export { useThermostat };
