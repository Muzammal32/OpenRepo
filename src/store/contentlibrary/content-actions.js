// Action Types
import * as Actions from './content-action-types';
// Axios Wrapper
import axios from '../../utils/AxiosWrapper';
// API URLS
import * as URLS from '../../utils/ApiUrls';
import {FLIP_THE_SWITCH, ORDERS_LIST} from "../../utils/ApiUrls";


// Request GET CONTENT LIBRARY
export const getContentLibrary = (search,type, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.CONTENT_LIBRARY_LIST+"?filter="+type+"&search="+search).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setContentList(res.data.data.data));
                dispatch(_setContentPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET CONTENT LIBRARY PAGINATION
export const getContentLibraryPagination = (data, page,search,filter, cb) => {
    return (dispatch => {
        dispatch(_setLoadingMore(true));
        dispatch(_setError(false));
        axios.get(URLS.CONTENT_LIBRARY_LIST+page+'&filter='+filter+"&search="+search).then(res => {
            dispatch(_setError(false));
            dispatch(_setLoadingMore(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setContentList([...data, ...res.data.data.data]));
                dispatch(_setContentPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setLoadingMore(false));
            cb && cb(err.response.data);
        });
    })
}


// Request GET FLIP THE SWITCH
export const getFlipTheSwitch = (search, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.FLIP_THE_SWITCH+"?search="+search).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setFlipTheSwitchList(res.data.data.data));
                dispatch(_setFlipTheSwitchPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET FLIP THE SWITCH PAGINATION
export const getFlipTheSwitchPagination = (data, page, search, cb) => {
    return (dispatch => {
        dispatch(_setLoadingMore(true));
        dispatch(_setError(false));
        axios.get(URLS.FLIP_THE_SWITCH+page+"&search="+search).then(res => {
            dispatch(_setError(false));
            dispatch(_setLoadingMore(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setFlipTheSwitchList([...data, ...res.data.data.data]));
                dispatch(_setFlipTheSwitchPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setLoadingMore(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET FLIP THE SWITCH
export const getPodcast = (search, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.PODCASTS+"?search="+search).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setPodcastsList(res.data.data.data));
                dispatch(_setPodcastsPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET FLIP THE SWITCH PAGINATION
export const getPodcastPagination = (data, page,search, cb) => {
    return (dispatch => {
        dispatch(_setLoadingMore(true));
        dispatch(_setError(false));
        axios.get(URLS.PODCASTS+page+"&search="+search).then(res => {
            dispatch(_setError(false));
            dispatch(_setLoadingMore(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setPodcastsList([...data, ...res.data.data.data]));
                dispatch(_setPodcastsPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setLoadingMore(false));
            cb && cb(err.response.data);
        });
    })
}

// Dispatch Actions
const _setProcessing = (payload) => {
    return {
        type: Actions.CONTENT_ACTION_SET_PROCESSING,
        payload,
    };
};
const _setLoadingMore = (payload) => {
    return {
        type: Actions.CONTENT_ACTION_SET_PROCESSING_MORE,
        payload,
    };
};
const _setError = (payload) => {
    return {
        type: Actions.CONTENT_ACTION_SET_ERROR,
        payload,
    };
};
const _setMessage = (payload) => {
    return {
        type: Actions.CONTENT_ACTION_SET_MESSAGE,
        payload,
    };
};
const _setContentList = (payload) => {
    return {
        type: Actions.CONTENT_ACTION_LIST,
        payload,
    };
};
const _setContentPagination = (payload) => {
    return {
        type: Actions.CONTENT_ACTION_PAGINATION,
        payload,
    };
};

const _setFlipTheSwitchList = (payload) => {
    return {
        type: Actions.FLIP_ACTION_LIST,
        payload,
    };
};
const _setFlipTheSwitchPagination = (payload) => {
    return {
        type: Actions.FLIP_ACTION_PAGINATION,
        payload,
    };
};
const _setPodcastsList = (payload) => {
    return {
        type: Actions.PODCASTS_ACTION_LIST,
        payload,
    };
};
const _setPodcastsPagination = (payload) => {
    return {
        type: Actions.PODCASTS_ACTION_PAGINATION,
        payload,
    };
};

const _setToggleAsyncStorage = (payload) => {
    return {
        type: Actions.CONTENT_ACTION_TOGGLE_ASYNC_STORAGE,
        payload,
    };
};
const _resetState = (payload) => {
    return {
        type: Actions.CONTENT_ACTION_RESET_STATE,
        payload,
    };
};
