export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED'

export const SET_TEMPERATURE = 'SET_TEMPERATURE'

export const fetchData = () => {
    return {
        type: FETCH_DATA
    };
}

export const fetchDataSuccess = (payload = {}) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    };
}
export const fetchDataFailed = () => {
    return {
        type: FETCH_DATA_FAILED
    };
}

export const setTemperature = (payload = {}) => {
    return {
        type: SET_TEMPERATURE,
        payload
    };
};