import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Import your root reducer
import rootSaga from './sagas'; // Import your root saga

const sagaMiddleware = createSagaMiddleware();

const logger = (store: any) => (next: any) => (action: any) => {
    next(action)
    console.log(action)
}

const middlewares: any = [sagaMiddleware]
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);


export default store;
