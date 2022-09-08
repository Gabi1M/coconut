import { applyMiddleware, combineReducers, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { accessTokenReducer, accessTokenSaga } from '@reddit/accessToken';

import { GlobalState } from './types';

export const createStore = () => {
    const appSagas = [accessTokenSaga];

    const sagaMiddleware = createSagaMiddleware();
    const store = createReduxStore(
        combineReducers<GlobalState>({
            accessToken: accessTokenReducer,
        }),
        applyMiddleware(sagaMiddleware),
    );

    appSagas.forEach((saga) => sagaMiddleware.run(saga));
    return store;
};
