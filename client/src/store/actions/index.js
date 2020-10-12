export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

export const SET_TEMPERATURE = 'SET_TEMPERATURE';
export const SET_TEMPERATURE_SUCCESS = 'SET_TEMPERATURE_SUCCESS';
export const SET_TEMPERATURE_FAILED = 'SET_TEMPERATURE_FAILED';


export const fetchData = () => {
    return {
        type: FETCH_DATA
    };
};

export const fetchDataSuccess = (payload = {}) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    };
};

export const fetchDataFailed = () => {
    return {
        type: FETCH_DATA_FAILED
    };
};

export const setTemperature = () => {
    return {
        type: SET_TEMPERATURE
    };
};

export const setTemperatureSuccess = (payload = {}) => {
    return {
        type: SET_TEMPERATURE_SUCCESS,
        payload
    };
};

export const setTemperatureFailed = (payload = {}) => {
    return {
        type: SET_TEMPERATURE_FAILED,
        payload
    };
};