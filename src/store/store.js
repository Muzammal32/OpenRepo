// Redux
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
// Config
import {Config} from '../Config';
// Stores
import auth from './user/user-reducer';
import journal from './journal/journal-reducer';
import products from './products/products-reducer';
import content from './contentlibrary/content-reducer';
import general from './general/general-reducer';

const reducer = combineReducers({
  auth,
  journal,
  products,
  content,
  general
});
const composeEnhancer = (Config.ENV === 'DEV') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(
    reducer,
    composeEnhancer(
        applyMiddleware(thunk)
    )
);


export default store;
