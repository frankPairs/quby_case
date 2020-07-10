import { useEffect, useState } from 'react';

import { Thermostat } from '../types';
import { createPoll } from '../utils/poll';
import { getTemperature, patchTemperature } from '../services';

interface ThermostatState {
  data: Thermostat;
  error: 'string' | null;
}

const inicalState: ThermostatState = {
  data: {
    temperature: null,
    setpoint: null,
    lastUpdateAt: null,
  },
  error: null,
};

function useThermostat(): [ThermostatState, (newTemp: number) => void] {
  const [thermostatState, setThermostat] = useState<ThermostatState>(inicalState);

  const poll = createPoll(getTemperatureRequest, 2000);

  useEffect(function pollTemperature() {
    poll.start();

    return poll.cancel;
  }, []);

  function setData(newData: Thermostat) {
    setThermostat({ data: newData, error: null });
  }

  function setError(error: 'string') {
    setThermostat((prevState) => ({
      ...prevState,
      error,
    }));
  }

  async function getTemperatureRequest() {
    try {
      const data = await getTemperature(poll.restart);
      setData(data);
    } catch (err) {
      setError(err);
    }
  }

  async function updateSetpointRequest(newTemp: number) {
    try {
      await patchTemperature(newTemp);
    } catch (err) {
      setError(err);
    }
  }

  return [thermostatState, updateSetpointRequest];
}

export { useThermostat };
