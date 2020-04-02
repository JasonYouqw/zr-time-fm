import { createStore, combineReducers, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import giftReducer from './Reducer';

const reducer = combineReducers({
  routing: routerReducer,
  giftReducer,
});

const win = window;
const storeEnhancers = compose(
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f:any) => f,
);

const initiaState = {};  // store初始值的作用，怎么使用
const store = createStore(reducer, initiaState, storeEnhancers);
export default store;
