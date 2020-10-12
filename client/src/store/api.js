import axios from 'axios';
// import axiosRetry from 'axios-retry';

import {
    fetchData,
    fetchDataFailed,
    fetchDataSuccess,
    setTemperature,
    setTemperatureSuccess,
    setTemperatureFailed
} from './actions';

export const fetchTemp = () => {
    return dispatch => {
        dispatch(fetchData());
        axios(`http://localhost:9090`)
            .then(response => {
                if (response.status === 202) {
                    // TODO add axios-retry
                    throw new axios.Cancel();
                }
                dispatch(fetchDataSuccess(response.data));
            })
            .catch(() => {
                dispatch(fetchDataFailed());
            })
    };
}

export const patchTemperature = (currentTemp, currentSetpoint) => {
    const data = { currentTemp, currentSetpoint }
    return dispatch => {
        dispatch(setTemperature());
        axios.patch(`http://localhost:9090`, { currentTemp, currentSetpoint })
            .then(() => {
                dispatch(setTemperatureSuccess());
            })
            .catch(() => {
                dispatch(setTemperatureFailed());
            });
    };
}