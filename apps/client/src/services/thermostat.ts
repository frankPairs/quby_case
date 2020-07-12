import retry from 'async-retry';
import { AxiosRequestConfig } from 'axios';

import { ThermostatResponse, Thermostat } from '../types';
import { api } from './api';

async function getTemperature({ onRetry }: { onRetry: () => void }, config?: AxiosRequestConfig) {
  return await retry(
    async () => {
      const res = await api.get<ThermostatResponse>('/', config);

      if (202 === res.status) {
        throw new Error('Thermostat data not found');
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

function patchTemperature(temp: number, config?: AxiosRequestConfig) {
  return api.patch('/', { currentSetpoint: temp }, config);
}

function parseThermostat(thermostateRes: ThermostatResponse): Thermostat {
  return {
    temperature: thermostateRes.currentTemp,
    setpoint: thermostateRes.currentSetpoint,
    lastUpdateAt: thermostateRes.timestamp,
  };
}

export { patchTemperature, getTemperature };
