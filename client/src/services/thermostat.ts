import retry from 'async-retry';

import { ThermostatResponse } from '../types';
import { api } from './api';

async function getTemperature(onTemperatureRetry: () => void) {
  return await retry(
    async () => {
      const res = await api.get<ThermostatResponse>('/');

      if (202 === res.status) {
        throw new Error('Data not found');
      }

      return {
        temperature: res.data.currentTemp,
        setpoint: res.data.currentSetpoint,
        lastUpdateAt: res.data.timestamp,
      };
    },
    {
      retries: 10,
      onRetry: () => {
        onTemperatureRetry();
      },
      minTimeout: 100,
      maxTimeout: 500,
    },
  );
}

function patchTemperature(temp: number) {
  return api.patch('/', { currentSetpoint: temp });
}

export { patchTemperature, getTemperature };
