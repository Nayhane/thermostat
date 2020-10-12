import axios from 'axios';

import {
    fetchData,
    fetchDataFailed,
    fetchDataSuccess,
    setTemperature,
    setTemperatureSuccess,
    setTemperatureFailed
} from '@store/actions';

const MAX_RETRY = 10;
let currentRetry = 0;

export const fetchTemp = () => {
    return dispatch => {
        dispatch(fetchData());
        axios(`http://localhost:9090`)
            .then(response => {
                if (response.status === 202) {
                    throw new axios.Cancel();
                }
                currentRetry = 0;
                dispatch(fetchDataSuccess(response.data));
            })
            .catch(() => {
                if (currentRetry < MAX_RETRY) {
                    currentRetry++;
                    console.log('Retrying...');
                    dispatch(fetchTemp());
                } else {
                    console.log('Retried but still failed');
                }
            })
    };
}

export const patchTemperature = (currentTemp, currentSetpoint) => {
    const data = { currentTemp, currentSetpoint };
    return dispatch => {
        dispatch(setTemperature());
        axios.patch(`http://localhost:9090`, data)
            .then(() => {
                dispatch(setTemperatureSuccess());
            })
            .catch(() => {
                dispatch(setTemperatureFailed());
            });
    };
}