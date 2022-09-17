import { applyMiddleware, combineReducers, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { accessTokenReducer, accessTokenSaga } from '@coconut/accessToken';
import { feedReducer, feedSaga } from '@coconut/feed';
import { profileReducer, profileSaga } from '@coconut/profile';

import { startupSaga } from './startupSaga';
import { GlobalState } from './types';

export const createStore = () => {
    const appSagas = [accessTokenSaga, profileSaga, feedSaga, startupSaga];

    const sagaMiddleware = createSagaMiddleware();
    const store = createReduxStore(
        combineReducers<GlobalState>({
            accessToken: accessTokenReducer,
            profile: profileReducer,
            feed: feedReducer,
        }),
        applyMiddleware(sagaMiddleware),
    );

    appSagas.forEach((saga) => sagaMiddleware.run(saga));
    return store;
};
