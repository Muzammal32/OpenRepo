// Action Types
import * as Actions from './content-action-types';
// User Local Storage Key
import {CONTENT_LOCAL_STORAGE} from '../../utils/CommonConstants';
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
    contentList : [],
    contentPagination: {},
    flipTheSwitchList : [],
    flipTheSwitchPagination : {},
    podcastsList: [],
    podcastsPagination: {}
};
// Reducer
const reducer = (state = initialState, action) => {

    const newState = {...state};

    const {type, payload} = action;

    switch (type) {

        case Actions.CONTENT_ACTION_SET_PROCESSING:
            newState.processing = payload;
            break;
        case Actions.CONTENT_ACTION_SET_PROCESSING_MORE:
            newState.isProcessingMore = payload;
            break;
        case Actions.CONTENT_ACTION_SET_ERROR:
            newState.error = payload;
            break;
        case Actions.CONTENT_ACTION_SET_MESSAGE:
            newState.message = payload;
            break;
        case Actions.CONTENT_ACTION_LIST:
            newState.contentList = payload;
            break;
        case Actions.CONTENT_ACTION_PAGINATION:
            newState.contentPagination = payload;
            break;
        case Actions.FLIP_ACTION_LIST:
            newState.flipTheSwitchList = payload;
            break;
        case Actions.FLIP_ACTION_PAGINATION:
            newState.flipTheSwitchPagination = payload;
            break;
        case Actions.PODCASTS_ACTION_LIST:
            newState.podcastsList = payload;
            break;
        case Actions.PODCASTS_ACTION_PAGINATION:
            newState.podcastsPagination = payload;
            break;
        case Actions.CONTENT_ACTION_TOGGLE_ASYNC_STORAGE:
            toggleAsyncStorage(newState, payload);
            break;
        case Actions.CONTENT_ACTION_RESET_STATE:
            resetState(newState);
            break;
        default:
            break;
    }

    return newState;
};

const toggleAsyncStorage = async (state, fill) => {
    if (fill) {
        await setStoreData(CONTENT_LOCAL_STORAGE, JSON.stringify(state));
    } else {
        await removeValue(CONTENT_LOCAL_STORAGE);
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

