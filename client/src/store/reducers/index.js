import * as appActions from '../actions';

const initialState = {
    data: {
        currentSetpoint: null,
        currentTemp: null,
        timestamp: null,
        error: false
    }
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case appActions.FETCH_DATA_SUCCESS: {
            return {
                ...state,
                data: {
                    ...state.data,
                    currentSetpoint: action.payload.currentSetpoint,
                    currentTemp: action.payload.currentTemp,
                    timestamp: action.payload.timestamp
                }
            };
        }
        case appActions.FETCH_DATA_FAILED: {
            return {
                ...state,
                data: {
                    ...state.data,
                    error: true
                }
            };
        }
        case appActions.SET_TEMPERATURE_SUCCESS:
            return {
                ...state,
            }
        case appActions.SET_TEMPERATURE_FAILED: {
            return {
                ...state,
                data: {
                    ...state.data,
                    error: true
                }
            };
        }
        default: {
            return state;
        }
    }
};