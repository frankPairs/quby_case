import { Canceler } from 'axios';

import { Thermostat } from '../../types';

/* State */
interface ThermostatState {
  data: Thermostat;
  requests: {
    getTemperature: { canceler: Canceler | null };
    updateSetpoint: { canceler: Canceler | null };
  };
}

/* Actions */
enum ThermostateActionTypes {
  SET_DATA = 'setData',
  SET_GET_TEMPERATURE_CANCELER = 'setGetTemperatureCanceler',
  SET_UPDATE_SETPOINT_CANCELER = 'setUpdateSetpointCanceler',
}

interface SetDataAction {
  type: ThermostateActionTypes.SET_DATA;
  payload: Thermostat;
}

interface SetGetTemperatureCancelerAction {
  type: ThermostateActionTypes.SET_GET_TEMPERATURE_CANCELER;
  payload: Canceler;
}

interface SetUpdateSetpointCancelerAction {
  type: ThermostateActionTypes.SET_UPDATE_SETPOINT_CANCELER;
  payload: Canceler;
}

type ThermostatActions = SetDataAction | SetGetTemperatureCancelerAction | SetUpdateSetpointCancelerAction;

export {
  ThermostatState,
  ThermostateActionTypes,
  ThermostatActions,
  SetDataAction,
  SetGetTemperatureCancelerAction,
  SetUpdateSetpointCancelerAction,
};
