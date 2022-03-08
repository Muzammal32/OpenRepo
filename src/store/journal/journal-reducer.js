// Action Types
import * as Actions from './jounrnal-action-types';
// User Local Storage Key
import {JOURNAL_LOCAL_STORAGE} from '../../utils/CommonConstants';
// utils
import {
    setStoreData,
    removeValue
} from '../../utils/AsyncStorage';

// Initial State
const initialState = {
    processing: false,
    isNotesLoadingMore: false,
    error: false,
    message: null,
    weeklyGoals: [],
    notesList : [],
    questionList: [],
    rating: null,
    dayAnswers: [],
    stats: '',
    notesPagination: {},
    dashboard: {}
};
// Reducer
const reducer = (state = initialState, action) => {

    const newState = {...state};

    const {type, payload} = action;

    switch (type) {

        case Actions.JOURNAL_ACTION_SET_PROCESSING:
            newState.processing = payload;
            break;
        case Actions.JOURNAL_ACTION_SET_ERROR:
            newState.error = payload;
            break;
        case Actions.JOURNAL_ACTION_SET_MESSAGE:
            newState.message = payload;
            break;
        case Actions.JOURNAL_ACTION_GOALS_WEEKLY:
            newState.weeklyGoals = payload;
            break;
        case Actions.JOURNAL_ACTION_NOTES_LIST:
            newState.notesList = payload;
            break;
        case Actions.JOURNAL_ACTION_NOTES_PAGINATION:
            newState.notesPagination = payload;
            break;
        case Actions.JOURNAL_ACTION_SET_NOTES_LOADING_MORE:
            newState.isNotesLoadingMore = payload;
            break;
        case Actions.JOURNAL_ACTION_QUESTIONS_LIST:
            newState.questionList = payload;
            break;
        case Actions.JOURNAL_ACTION_RATING_FOCUS:
            newState.rating = payload;
            break;
        case Actions.JOURNAL_ACTION_DAY_ANSWER:
            newState.dayAnswers = payload;
            break;
        case Actions.JOURNAL_ACTION_DAY_STATS:
            newState.stats = payload;
            break;
        case Actions.JOURNAL_ACTION_DASHBOARD:
            newState.dashboard = payload;
            break;
        case Actions.JOURNAL_ACTION_TOGGLE_ASYNC_STORAGE:
            toggleAsyncStorage(newState, payload);
            break;
        case Actions.JOURNAL_ACTION_RESET_STATE:
            resetState(newState);
            break;

        default:
            break;
    }

    return newState;
};

const toggleAsyncStorage = async (state, fill) => {
    if (fill) {
        await setStoreData(JOURNAL_LOCAL_STORAGE, JSON.stringify(state));
    } else {
        await removeValue(JOURNAL_LOCAL_STORAGE);
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

