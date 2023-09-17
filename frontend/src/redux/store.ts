import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Import your root reducer
import rootSaga from './sagas'; // Import your root saga

const sagaMiddleware = createSagaMiddleware();

const logger = (store: any) => (next: any) => (action: any) => {
    next(action)
    console.log(action)
}

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);


export default store;
