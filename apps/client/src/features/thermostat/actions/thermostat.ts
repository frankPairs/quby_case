import { Canceler } from 'axios';
import { Dispatch } from 'react';

import {
  SetDataAction,
  SetGetTemperatureCancelerAction,
  SetUpdateSetpointCancelerAction,
  ThermostateActionTypes,
} from '../types';
import { Thermostat } from '../../../types';

const setDataAction = (data: Thermostat): SetDataAction => ({
  type: ThermostateActionTypes.SET_DATA,
  payload: data,
});

const setGetTemperatureCanceler = (canceler: Canceler): SetGetTemperatureCancelerAction => ({
  type: ThermostateActionTypes.SET_GET_TEMPERATURE_CANCELER,
  payload: canceler,
});

const setUpdateSetpointCanceler = (canceler: Canceler): SetUpdateSetpointCancelerAction => ({
  type: ThermostateActionTypes.SET_UPDATE_SETPOINT_CANCELER,
  payload: canceler,
});

export { setDataAction, setGetTemperatureCanceler, setUpdateSetpointCanceler };
