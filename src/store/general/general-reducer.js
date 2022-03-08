// Action Types
import * as Actions from './general-action-types';
// User Local Storage Key
import {GENERAL_LOCAL_STORAGE} from '../../utils/CommonConstants';
// utils
import {
    setStoreData,
    removeValue
} from '../../utils/AsyncStorage';

// Initial State
const initialState = {
    processing: false,
    isProcessingMore: false,
    error: false,
    message: null,
    faqList: [],
    checkList: [],
    termsAndConditionList: []
};
// Reducer
const reducer = (state = initialState, action) => {

    const newState = {...state};

    const {type, payload} = action;

    switch (type) {

        case Actions.GENERAL_ACTION_SET_PROCESSING:
            newState.processing = payload;
            break;
        case Actions.GENERAL_ACTION_SET_PROCESSING_MORE:
            newState.isProcessingMore = payload;
            break;
        case Actions.GENERAL_ACTION_SET_ERROR:
            newState.error = payload;
            break;
        case Actions.GENERAL_ACTION_SET_MESSAGE:
            newState.message = payload;
            break;
        case Actions.FAQ_ACTION_LIST:
            newState.faqList = payload;
            break;
        case Actions.TERMS_AND_CONDITIONS_ACTION_LIST:
            newState.termsAndConditionList = payload;
            break;
        case Actions.CHECK_ACTION_LIST:
            newState.checkList = payload;
            break;
        case Actions.GENERAL_ACTION_TOGGLE_ASYNC_STORAGE:
            toggleAsyncStorage(newState, payload);
            break;
        case Actions.GENERAL_ACTION_RESET_STATE:
            resetState(newState);
            break;
        default:
            break;
    }

    return newState;
};

const toggleAsyncStorage = async (state, fill) => {
    if (fill) {
        await setStoreData(GENERAL_LOCAL_STORAGE, JSON.stringify(state));
    } else {
        await removeValue(GENERAL_LOCAL_STORAGE);
    }
    return state;
};
// Reset State
const resetState = (state) => {
    state.processing = false;
    state.error = false;
    state.message = null;
};
export default reducer;

