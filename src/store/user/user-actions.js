// Action Types
import * as Actions from './user-action-types';
// Axios Wrapper
import axios from '../../utils/AxiosWrapper';
// API URLS
import * as URLS from '../../utils/ApiUrls';
// Libraries
import moment from 'moment';
import {AUTH_GET_TOKEN, AUTH_GET_USER} from "../../utils/ApiUrls";

// Login
export const login = (email, password, cb) => (dispatch) => {
    dispatch(_setProcessing(true));
    dispatch(_setError(false));

    axios.login(URLS.AUTH_LOGIN, {email, password}).then(res => {
        const {data} = res;
        const content = data.data;
        const {success, message} = data;
        dispatch(_setToken(content.token));
        dispatch(_setLastLogin(moment().format()));
        dispatch(_setAuth(true));
        dispatch(_setError(false));
        dispatch(_setMessage(message));
        dispatch(_setProcessing(false));
        dispatch(_setToggleAsyncStorage(true));
        cb && cb({success, message});
    }).catch(err => {
        dispatch(_setError(true));
        dispatch(_setProcessing(false));
        const {success, message} = err.response.data;
        dispatch(_setMessage(message));
        cb && cb({success, message});
    });
};

export const socialMediaLogin = (data, cb) => (dispatch) => {
    dispatch(_setProcessing(true));
    dispatch(_setError(false));

    axios.login(URLS.AUTH_SOCIAL_LOGIN, data).then(res => {
        const {data} = res;
        const content = data.data;
        const {success, message} = data;
        dispatch(_setToken(content.token));
        dispatch(_setLastLogin(moment().format()));
        dispatch(_setAuth(true));
        dispatch(_setError(false));
        dispatch(_setMessage(message));
        dispatch(_setProcessing(false));
        dispatch(_setToggleAsyncStorage(true));
        cb && cb({success, message});
    }).catch(err => {
        dispatch(_setError(true));
        dispatch(_setProcessing(false));
        const {success, message} = err.response.data;
        dispatch(_setMessage(message));
        cb && cb({success, message});
    });
};

export const getUser = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.AUTH_GET_USER).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            const {data} = res;
            dispatch(_setUser(data.data));
            dispatch(_setToggleAsyncStorage(true));
            cb && cb(data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    });
};


export const setUserFromStorage = (data, cb) => {
    return ((dispatch) => {
        const content = data;
        dispatch(_setUser(content.user));
        dispatch(_setToken(content.token));
        dispatch(_setLastLogin(content.hasOwnProperty('lastLogin') ? content.lastLogin : moment().format()));
        dispatch(_setVerified(content.verified));
        dispatch(_setAuth(true));
        dispatch(_setError(false));
        dispatch(_setProcessing(false));
        cb && cb();
    });

};

export const checkEmailExist = (email, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.AUTH_CHECK_EMAIL + email).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            const {data} = res;
            cb && cb(data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
        });
    });
};

export const checkPhoneExist = (phone, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.AUTH_CHECK_PHONE + phone).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            const {data} = res;
            cb && cb(data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
        });
    });
};

// Request Register OTP
export const requestRegisterOTP = (number, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.AUTH_REQUEST_OTP, {phone: number}).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            cb && cb();
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb();
        });
    })
}

// Register
export const setRegistrationInfo = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.AUTH_REGISTER, data).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            const {data} = res;
            cb && cb(data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    });
};

// Logout
export const logout = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_resetState());
        dispatch(_setToggleAsyncStorage(false));
        dispatch(_setProcessing(false));
    });
};

// Request Forget Phone
export const requestForgetPhone = (number, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.AUTH_RESET_PHONE, {phone_number: number}).then(res => {
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

// Request Forget Email
export const requestForgetEmail = (email, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.AUTH_RESET_EMAIL, {email: email}).then(res => {
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

// Request Forget
export const requestForget = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.AUTH_RESET, data).then(res => {
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

export const onBoarding = (bool) => {
    return (dispatch => {
        dispatch(_setFirstTime(bool));
    })
}

// Request GET CONFIGURATION
export const getConfiguration = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.GET_CONFIGURATION).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            const {data} = res;
            dispatch(_setConfiguration(data.data));
            cb && cb(data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    });
};

// Request SET CONFIGURATION
export const setConfiguration = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.SET_CONFIGURATION, data).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            dispatch(_setConfiguration(res.data.data));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
};



// Request GET CONFIGURATION
export const getToken = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.AUTH_GET_TOKEN).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            const {data} = res;
            cb && cb(data);
        }).catch(err => {
            dispatch(_setError(true));
       dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    });
};

// Dispatch Actions
const _setFirstTime = (payload) => {
    return {
        type: Actions.AUTH_ACTION_SET_FIRST_TIME,
        payload,
    };
};

const _setUser = (payload) => {
    return {
        type: Actions.AUTH_ACTION_SET_USER,
        payload,
    };
};
const _setProcessing = (payload) => {
    return {
        type: Actions.AUTH_ACTION_SET_PROCESSING,
        payload,
    };
};
const _setError = (payload) => {
    return {
        type: Actions.AUTH_ACTION_SET_ERROR,
        payload,
    };
};
const _setMessage = (payload) => {
    return {
        type: Actions.AUTH_ACTION_SET_MESSAGE,
        payload,
    };
};
const _setAuth = (payload) => {
    return {
        type: Actions.AUTH_ACTION_SET_AUTH,
        payload,
    };
};
const _setToken = (payload) => {
    return {
        type: Actions.AUTH_ACTION_SET_TOKEN,
        payload,
    };
};

const _setLastLogin = (payload) => {
    return {
        type: Actions.AUTH_ACTION_SET_LAST_LOGIN,
        payload,
    };
};

const _setVerified = (payload) => {
    return {
        type: Actions.AUTH_ACTION_SET_VERIFIED,
        payload,
    };
};

const _setConfiguration = (payload) => {
    return {
        type: Actions.AUTH_ACTION_SET_CONFIGURATION,
        payload,
    };
};

const _setToggleAsyncStorage = (payload) => {
    return {
        type: Actions.AUTH_ACTION_TOGGLE_ASYNC_STORAGE,
        payload,
    };
};

const _resetState = (payload) => {
    return {
        type: Actions.AUTH_ACTION_RESET_STATE,
        payload,
    };
};
