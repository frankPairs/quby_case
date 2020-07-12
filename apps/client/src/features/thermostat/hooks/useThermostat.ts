import { useEffect, useReducer } from 'react';
import axios from 'axios';

import { createPoll } from '../../../utils/poll';
import { getTemperature, patchTemperature } from '../../../services';
import { ThermostatState } from '../types';
import { setDataAction, setGetTemperatureCanceler, setUpdateSetpointCanceler } from '../actions';
import { thermostatReducer, thermostatInitialState } from '../reducers';

type UseThermostatReturn = [
  ThermostatState,
  {
    updateSetpoint: (newTemp: number) => void;
    cancelRequests: () => void;
  },
];

const CancelToken = axios.CancelToken;

function useThermostat(): UseThermostatReturn {
  const [state, dispatch] = useReducer(thermostatReducer, thermostatInitialState);
  const poll = createPoll(getTemperatureRequest, 2000);

  useEffect(function pollTemperature() {
    poll.start();

    return poll.cancel;
  }, []);

  function cancelGetTempRequest() {
    if (state.requests.getTemperature.canceler) {
      state.requests.getTemperature.canceler();
    }
  }

  function cancelUpdateSetpointRequest() {
    if (state.requests.updateSetpoint.canceler) {
      state.requests.updateSetpoint.canceler();
    }
  }

  function cancelRequests() {
    poll.cancel();
    cancelGetTempRequest();
    cancelUpdateSetpointRequest();
  }

  async function getTemperatureRequest() {
    const data = await getTemperature(
      {
        onRetry: poll.restart,
      },
      {
        cancelToken: new CancelToken((c) => dispatch(setGetTemperatureCanceler(c))),
      },
    );

    dispatch(setDataAction(data));
  }

  async function updateSetpointRequest(newTemp: number) {
    poll.cancel();
    await patchTemperature(newTemp, {
      cancelToken: new CancelToken((c) => dispatch(setUpdateSetpointCanceler(c))),
    });
    poll.start();
  }

  return [
    state,
    {
      updateSetpoint: updateSetpointRequest,
      cancelRequests,
    },
  ];
}

export { useThermostat };
