
import * as appActions from '../actions'

const initialState = {
    currentSetpoint: null,
    currentTemp: null,
    timestamp: null,
    error: null
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case appActions.FETCH_DATA: {
            return {
                ...state,
                error: false,
            }
        }
        case appActions.FETCH_DATA_SUCCESS: {
            return {
                ...state,
                currentSetpoint: action.payload.currentSetpoint,
                currentTemp: action.payload.currentTemp
            }
        }
        case appActions.FETCH_DATA_FAILED: {
            return {
                ...state,
                error: true,
            }
        }
        case appActions.SET_TEMPERATURE:
            return {
                ...state,
                currentSetpoint: action.payload.currentSetpoint,
                currentTemp: action.payload.currentTemp,
                timestamp: action.payload.timestamp
            };
        default: {
            return state;
        }
    }
};