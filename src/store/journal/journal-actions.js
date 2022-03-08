// Action Types
import * as Actions from './jounrnal-action-types';
// Axios Wrapper
import axios from '../../utils/AxiosWrapper';
// API URLS
import * as URLS from '../../utils/ApiUrls';
import {JOURNAL_GET_DASHBOARD} from "../../utils/ApiUrls";

export const setJournalFromStorage = (data, cb) => {
    return ((dispatch) => {
        const content = data;
        dispatch(_setFocusRating(content.rating));
        dispatch(_setError(false));
        dispatch(_setProcessing(false));
        cb && cb();
    });

};

// Request GET GOALS
export const getGoals = (date,cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.JOURNAL_WEEKLY_GOALS+'/'+date).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            dispatch(_setWeeklyGoals(res.data));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET GOALS
export const createGoals = (date, data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.JOURNAL_CREATE_GOAL, data).then(res => {
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

// Request GET GOALS
export const getGoalsStatus = (id, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get('goals/'+id+'/status').then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            // dispatch(_setWeeklyGoals(res.data));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET GOALS
export const getDaysQuestions = (date,cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.JOURNAL_DAYS_QUESTION).then(res => {
            let data = res.data;
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            dispatch(_setMessage(data.message))
            dispatch(_setQuestionsList(data.data.data));
            cb && cb(data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request CREATE DAYS
export const createDay = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.JOURNAL_CREATE_DAY, data).then(res => {
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

// Request GET DAYS
export const getDay = (date,cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.JOURNAL_GET_DAY+'/'+date).then(res => {
            dispatch(_setError(false));

            dispatch(_setProcessing(false));
            let dataArray = res.data.data;
            dispatch(_setDayAnswers(dataArray))
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET NOTES
export const getNotes = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.JOURNAL_NOTES_LIST+'?page=1').then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setNotesList(res.data.data.data));
                dispatch(_setNotesPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET NOTES
export const getNotesPagination = (data, page, cb) => {
    return (dispatch => {
        dispatch(_setNotesLoadingMore(true));
        dispatch(_setError(false));
        axios.get(URLS.JOURNAL_NOTES_LIST+page).then(res => {
            dispatch(_setError(false));
            dispatch(_setNotesLoadingMore(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setNotesList([...data, ...res.data.data.data]));
                dispatch(_setNotesPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setNotesLoadingMore(false));
            cb && cb(err.response.data);
        });
    })
}

// Request Delete NOTES
export const deleteNotes = (id,cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.delete('notes/'+id+'/delete').then(res => {
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

// Request CREATE NOTES
export const createNotes = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.JOURNAL_TAKE_NOTES, data).then(res => {
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

// Request CREATE FOCUS TODAY
export const focusRate = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.JOURNAL_CREATE_FOCUS, data).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            let data = res.data
            dispatch(_setToggleAsyncStorage(true));
            cb && cb(data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}


// Request GET FOCUS TODAY
export const getScoreCardList = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.JOURNAL_GET_FOCUS).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            let data = res.data
            dispatch(_setFocusRating(data.data));
            dispatch(_setToggleAsyncStorage(true));
            cb && cb(data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET DAYS
export const getStats = (date,cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.JOURNAL_GET_STATS).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            let data = res.data.data;
            dispatch(_setDayStats(data));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET DAYS
export const getDashboardStats = (data,cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.JOURNAL_GET_DASHBOARD, data).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            let data = res.data;
            dispatch(_setDashboard(data.data));
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
        type: Actions.JOURNAL_ACTION_SET_PROCESSING,
        payload,
    };
};
const _setNotesLoadingMore = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_SET_NOTES_LOADING_MORE,
        payload,
    };
};
const _setError = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_SET_ERROR,
        payload,
    };
};
const _setMessage = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_SET_MESSAGE,
        payload,
    };
};

const _setWeeklyGoals = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_GOALS_WEEKLY,
        payload,
    };
};

const _setNotesList = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_NOTES_LIST,
        payload,
    };
};

const _setNotesPagination = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_NOTES_PAGINATION,
        payload,
    };
};

const _setQuestionsList = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_QUESTIONS_LIST,
        payload,
    };
};

const _setFocusRating = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_RATING_FOCUS,
        payload,
    };
};

const _setDayAnswers = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_DAY_ANSWER,
        payload,
    };
};

const _setDayStats = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_DAY_STATS,
        payload,
    };
};

const _setDashboard = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_DASHBOARD,
        payload,
    };
};

const _setToggleAsyncStorage = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_TOGGLE_ASYNC_STORAGE,
        payload,
    };
};

const _resetState = (payload) => {
    return {
        type: Actions.JOURNAL_ACTION_RESET_STATE,
        payload,
    };
};

