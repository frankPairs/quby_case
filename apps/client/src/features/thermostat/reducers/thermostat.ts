import produce from 'immer';

import { ThermostatState, ThermostatActions, ThermostateActionTypes } from '../types';

const thermostatInitialState: ThermostatState = {
  data: {
    setpoint: null,
    lastUpdateAt: null,
    temperature: null,
  },
  requests: {
    getTemperature: { canceler: null },
    updateSetpoint: { canceler: null },
  },
};

const thermostatReducer = produce((draft: ThermostatState, action: ThermostatActions) => {
  switch (action.type) {
    case ThermostateActionTypes.SET_DATA: {
      draft.data = action.payload;
      break;
    }
    case ThermostateActionTypes.SET_GET_TEMPERATURE_CANCELER: {
      draft.requests.getTemperature.canceler = action.payload;
      break;
    }
    case ThermostateActionTypes.SET_UPDATE_SETPOINT_CANCELER: {
      draft.requests.updateSetpoint.canceler = action.payload;
      break;
    }
  }
});

export { thermostatReducer, thermostatInitialState };
