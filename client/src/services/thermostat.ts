import retry from 'async-retry';

import { ThermostatResponse, Thermostat } from '../types';
import { api } from './api';

async function getTemperature({ onRetry }: { onRetry: () => void }) {
  return await retry(
    async () => {
      const res = await api.get<ThermostatResponse>('/');

      if (202 === res.status) {
        throw new Error('Data not found');
      }

      return parseThermostat(res.data);
    },
    {
      retries: 10,
      onRetry,
      minTimeout: 100,
      maxTimeout: 500,
    },
  );
}

function patchTemperature(temp: number) {
  return api.patch('/', { currentSetpoint: temp });
}

function parseThermostat(thermostateRes: ThermostatResponse): Thermostat {
  return {
    temperature: thermostateRes.currentTemp,
    setpoint: thermostateRes.currentSetpoint,
    lastUpdateAt: thermostateRes.timestamp,
  };
}

export { patchTemperature, getTemperature };
