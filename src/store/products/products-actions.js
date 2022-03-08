// Action Types
import * as Actions from './products-action-types';
// Axios Wrapper
import axios from '../../utils/AxiosWrapper';
// API URLS
import * as URLS from '../../utils/ApiUrls';
import {TRANSACTIONS_LIST} from "../../utils/ApiUrls";

// Request GET PRODUCTS
export const getProducts = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.PRODUCTS_LIST+"?page=1").then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setProductsList(res.data.data.data));
                dispatch(_setProductsPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET PRODUCTS PAGINATION
export const getProductsPagination = (data, page, cb) => {
    return (dispatch => {
        dispatch(_setLoadingMore(true));
        dispatch(_setError(false));
        axios.get(URLS.PRODUCTS_LIST+page).then(res => {
            dispatch(_setError(false));
            dispatch(_setLoadingMore(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setProductsList([...data, ...res.data.data.data]));
                dispatch(_setProductsPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setLoadingMore(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET MY ORDERS
export const getMyOrders = (type, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.ORDERS_LIST+type+"?page=1").then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setOrdersList(res.data.data.data));
                dispatch(_setOrdersPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET MY ORDERS PAGINATION
export const getMyOrdersPagination = ( data, page, cb) => {
    return (dispatch => {
        dispatch(_setLoadingMore(true));
        dispatch(_setError(false));
        axios.get(URLS.ORDERS_LIST+page).then(res => {
            dispatch(_setError(false));
            dispatch(_setLoadingMore(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setOrdersList([...data, ...res.data.data.data]));
                dispatch(_setOrdersPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setLoadingMore(false));
            cb && cb(err.response.data);
        });
    })
}

// Request ADD TO CART
export const addToCart = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.ADD_TO_CART, data).then(res => {
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

// Request GET MY CART
export const getMyCart = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.GET_CART).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setCartList(res.data.data.data));
                dispatch(_setCartPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET MY CART PAGINATION
export const getMyCartPagination = (data, page, cb) => {
    return (dispatch => {
        dispatch(_setLoadingMore(true));
        dispatch(_setError(false));
        axios.get(URLS.GET_CART+page).then(res => {
            dispatch(_setError(false));
            dispatch(_setLoadingMore(false));
            if (res.data.data.hasOwnProperty('data')){
                dispatch(_setCartList([...data, ...res.data.data.data]));
                dispatch(_setCartPagination(res.data.data.pagination));
            }
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setLoadingMore(false));
            cb && cb(err.response.data);
        });
    })
};

// Request Delete CART
export const deleteCart = (id,cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.delete(URLS.GET_CART+'/'+id+'/delete').then(res => {
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

// Request ADD ADDRESSES
export const addAddress = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.ADD_ADDRESS, data).then(res => {
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

// Request GET MY ADDRESSES
export const getAddress = (cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.GET_ADDRESS).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            dispatch(_setAddressList(res.data.data));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request GET MY TRAMSACTIONS
export const getMyTransactions = ( cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.get(URLS.TRANSACTIONS_LIST).then(res => {
            dispatch(_setError(false));
            dispatch(_setProcessing(false));
            dispatch(_setTransactionList(res.data.data));
            cb && cb(res.data);
        }).catch(err => {
            dispatch(_setError(true));
            dispatch(_setProcessing(false));
            cb && cb(err.response.data);
        });
    })
}

// Request CHECKOUT
export const checkOut = (data, cb) => {
    return (dispatch => {
        dispatch(_setProcessing(true));
        dispatch(_setError(false));
        axios.post(URLS.CHECKOUT, data).then(res => {
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


// Dispatch Actions
const _setProcessing = (payload) => {
    return {
        type: Actions.PRODUCTS_ACTION_SET_PROCESSING,
        payload,
    };
};
const _setLoadingMore = (payload) => {
    return {
        type: Actions.PRODUCTS_ACTION_SET_PROCESSING_MORE,
        payload,
    };
};
const _setError = (payload) => {
    return {
        type: Actions.PRODUCTS_ACTION_SET_ERROR,
        payload,
    };
};
const _setMessage = (payload) => {
    return {
        type: Actions.PRODUCTS_ACTION_SET_MESSAGE,
        payload,
    };
};
const _setProductsList = (payload) => {
    return {
        type: Actions.PRODUCTS_ACTION_LIST,
        payload,
    };
};
const _setProductsPagination = (payload) => {
    return {
        type: Actions.PRODUCTS_ACTION_PAGINATION,
        payload,
    };
};
const _setOrdersList = (payload) => {
    return {
        type: Actions.ORDERS_ACTION_LIST,
        payload,
    };
};
const _setTransactionList = (payload) => {
    return {
        type: Actions.TRANSACTIONS_ACTION_LIST,
        payload,
    };
};
const _setOrdersPagination = (payload) => {
    return {
        type: Actions.ORDERS_ACTION_PAGINATION,
        payload,
    };
};
const _setCartList = (payload) => {
    return {
        type: Actions.CART_ACTION_LIST,
        payload,
    };
};
const _setCartPagination = (payload) => {
    return {
        type: Actions.CART_ACTION_PAGINATION,
        payload,
    };
};

const _setAddressList = (payload) => {
    return {
        type: Actions.ADDRESS_ACTION_LIST,
        payload,
    };
};

const _setToggleAsyncStorage = (payload) => {
    return {
        type: Actions.PRODUCTS_ACTION_TOGGLE_ASYNC_STORAGE,
        payload,
    };
};
const _resetState = (payload) => {
    return {
        type: Actions.PRODUCTS_ACTION_RESET_STATE,
        payload,
    };
};
