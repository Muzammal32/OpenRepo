// Action Types
import * as Actions from './user-action-types';
// User Local Storage Key
import {FIRST_TIME, USER_LOCAL_STORAGE} from "../../utils/CommonConstants";
// utils
import {
    setStoreData,
    removeValue
} from '../../utils/AsyncStorage';

// Initial State
const initialState = {
    processing: false,
    error: false,
    message: null,
    user: [],
    auth: false,
    token: null,
    lastLogin: null,
    verified: false,
    firstTime: false,
    configurationSettings: {}
};
// Reducer
const reducer = (state = initialState, action) => {

    const newState = {...state};

    const {type, payload} = action;

    switch (type) {

        case Actions.AUTH_ACTION_SET_USER:
            newState.user = payload;
            break;
        case Actions.AUTH_ACTION_SET_PROCESSING:
            newState.processing = payload;
            break;
        case Actions.AUTH_ACTION_SET_ERROR:
            newState.error = payload;
            break;
        case Actions.AUTH_ACTION_SET_MESSAGE:
            newState.message = payload;
            break;
        case Actions.AUTH_ACTION_SET_AUTH:
            newState.auth = payload;
            break;
        case Actions.AUTH_ACTION_SET_TOKEN:
            newState.token = payload;
            break;
        case Actions.AUTH_ACTION_SET_LAST_LOGIN:
            newState.lastLogin = payload;
            break;
        case Actions.AUTH_ACTION_SET_CONFIGURATION:
            newState.configurationSettings = payload;
            break;
        case Actions.AUTH_ACTION_TOGGLE_ASYNC_STORAGE:
            toggleAsyncStorage(newState, payload);
            break;
        case Actions.AUTH_ACTION_SET_VERIFIED:
            newState.verified = payload;
            break;
        case Actions.AUTH_ACTION_SET_FIRST_TIME:
            newState.firstTime = payload;
            onBoardingAsyncStorage(payload);
            break;
        case Actions.AUTH_ACTION_RESET_STATE:
            resetState(newState);
            break;
        default:
            break;
    }

    return newState;
};

const toggleAsyncStorage = async (state, fill) => {
    if (fill) {
        await setStoreData(USER_LOCAL_STORAGE, JSON.stringify(state));
    } else {
        await removeValue(USER_LOCAL_STORAGE);
    }
    return state;
};


const onBoardingAsyncStorage = async (payload) => {
    await setStoreData(FIRST_TIME, payload.toString());
};

// Reset State
const resetState = (state) => {
    state.processing = false;
    state.error = false;
    state.message = null;
    state.user = [];
    state.auth = false;
    state.verified = false;
    state.token = null;
    state.lastLogin = null;

};
export default reducer;

