
import axios from 'axios';
import { fetchData, fetchDataFailed, fetchDataSuccess, setTemperature } from './actions'

export const fetchTemp = () => {
    return dispatch => {
        dispatch(fetchData());
        fetch(`http://localhost:9090`)
            .then(response => {
                if (response.status === 202) {
                    dispatch(fetchDataFailed());
                }
                return response.json();
            })
            .then(data => {
                const dataObj = data && Object.keys(data)
                if (dataObj.length > 0) {
                    return dispatch(fetchDataSuccess(data));
                }
            })
            .catch(() => {
                return dispatch(fetchDataFailed());
            })
    }
}

export const patchTemperature = (currentTemp, currentSetpoint, timestamp) => {
    const data = { currentTemp, currentSetpoint, timestamp }
    return dispatch => {
        axios.patch(`http://localhost:9090`, data)
            .then(response => {
                dispatch(setTemperature(data));
            })
            .catch(err => {
                throw err;
            });
    }
}