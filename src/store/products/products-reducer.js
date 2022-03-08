// Action Types
import * as Actions from './products-action-types';
// User Local Storage Key
import {PRODUCTS_LOCAL_STORAGE} from '../../utils/CommonConstants';
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
    productsList : [],
    productsPagination: {},
    ordersList : [],
    ordersPagination: {},
    cartList : [],
    cartPagination: {},
    addressList : [],
    transactionList : []
};
// Reducer
const reducer = (state = initialState, action) => {

    const newState = {...state};

    const {type, payload} = action;

    switch (type) {

        case Actions.PRODUCTS_ACTION_SET_PROCESSING:
            newState.processing = payload;
            break;
        case Actions.PRODUCTS_ACTION_SET_PROCESSING_MORE:
            newState.isProcessingMore = payload;
            break;
        case Actions.PRODUCTS_ACTION_SET_ERROR:
            newState.error = payload;
            break;
        case Actions.PRODUCTS_ACTION_SET_MESSAGE:
            newState.message = payload;
            break;
        case Actions.PRODUCTS_ACTION_LIST:
            newState.productsList = payload;
            break;
        case Actions.PRODUCTS_ACTION_PAGINATION:
            newState.productsPagination = payload;
            break;
        case Actions.ORDERS_ACTION_LIST:
            newState.ordersList = payload;
            break;
        case Actions.ORDERS_ACTION_PAGINATION:
            newState.ordersPagination = payload;
            break;
        case Actions.CART_ACTION_LIST:
            newState.cartList = payload;
            break;
        case Actions.CART_ACTION_PAGINATION:
            newState.cartPagination = payload;
            break;
        case Actions.ADDRESS_ACTION_LIST:
            newState.addressList = payload;
            break;
        case Actions.TRANSACTIONS_ACTION_LIST:
            newState.transactionList = payload;
            break;
        case Actions.PRODUCTS_ACTION_TOGGLE_ASYNC_STORAGE:
            toggleAsyncStorage(newState, payload);
            break;
        case Actions.PRODUCTS_ACTION_RESET_STATE:
            resetState(newState);
            break;
        default:
            break;
    }

    return newState;
};

const toggleAsyncStorage = async (state, fill) => {
    if (fill) {
        await setStoreData(PRODUCTS_LOCAL_STORAGE, JSON.stringify(state));
    } else {
        await removeValue(PRODUCTS_LOCAL_STORAGE);
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

