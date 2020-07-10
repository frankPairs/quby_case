interface ThermostatResponse {
  currentTemp: number;
  currentSetpoint: number;
  timestamp: Date;
}

interface Thermostat {
  temperature: number | null;
  setpoint: number | null;
  lastUpdateAt: Date | null;
}

export { ThermostatResponse, Thermostat };
