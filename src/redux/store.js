import { createStore, applyMiddleware } from 'redux'
// import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export default store;