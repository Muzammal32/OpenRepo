// Action Types
import * as Actions from './general-action-types';
// Axios Wrapper
import axios from '../../utils/AxiosWrapper';
// API URLS
import * as URLS from '../../utils/ApiUrls';
import {ANSWER_DAILY_CHECKLIST, DAILY_CHECKLIST, TERMS_AND_CONDITIONS} from "../../utils/ApiUrls";

// Request GET FAQ
export const getFAQ = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.FAQ).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            dispatch(_setFAQList(res.data.data));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request CONTACT US
export const contactUS = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.CONTACT_US, data).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}


// Request FEEDBACK
export const feedBack = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.FEEDBACK, data).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request BUG REPORT
export const BugReport = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.BUG_REPORT, data).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET QUESTIONS DAILY CHECK LIST
export const getCheckList = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.DAILY_CHECKLIST).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            dispatch(_setCheckList(res.data.data));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}


// Request ANSWER CHECK LIST
export const answerCheckList = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.ANSWER_DAILY_CHECKLIST, data).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET FAQ
export const getTermsAndCondition = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.TERMS_AND_CONDITIONS).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            dispatch(_setTermsAndConditionsList(res.data.data));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}


// Dispatch Actions
const _setProcessing = (payload) => {
    return {
        type: Actions.GENERAL_ACTION_SET_PROCESSING,
        payload,
    };
};
const _setLoadingMore = (payload) => {
    return {
        type: Actions.GENERAL_ACTION_SET_PROCESSING_MORE,
        payload,
    };
};
const _setError = (payload) => {
    return {
        type: Actions.GENERAL_ACTION_SET_ERROR,
        payload,
    };
};
const _setMessage = (payload) => {
    return {
        type: Actions.GENERAL_ACTION_SET_MESSAGE,
        payload,
    };
};
const _setFAQList = (payload) => {
    return {
        type: Actions.FAQ_ACTION_LIST,
        payload,
    };
};
const _setTermsAndConditionsList = (payload) => {
    return {
        type: Actions.TERMS_AND_CONDITIONS_ACTION_LIST,
        payload,
    };
};
const _setCheckList = (payload) => {
    return {
        type: Actions.CHECK_ACTION_LIST,
        payload,
    };
};

const _setToggleAsyncStorage = (payload) => {
    return {
        type: Actions.GENERAL_ACTION_TOGGLE_ASYNC_STORAGE,
        payload,
    };
};
const _resetState = (payload) => {
    return {
        type: Actions.GENERAL_ACTION_RESET_STATE,
        payload,
    };
};