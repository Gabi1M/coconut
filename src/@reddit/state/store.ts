import { applyMiddleware, combineReducers, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { accessTokenReducer, accessTokenSaga } from '@reddit/accessToken';
import { listingsReducer, listingsSaga } from '@reddit/listings';
import { profileReducer, profileSaga } from '@reddit/profile';

import { startupSaga } from './startupSaga';
import { GlobalState } from './types';

export const createStore = () => {
    const appSagas = [accessTokenSaga, profileSaga, listingsSaga, startupSaga];

    const sagaMiddleware = createSagaMiddleware();
    const store = createReduxStore(
        combineReducers<GlobalState>({
            accessToken: accessTokenReducer,
            profile: profileReducer,
            listings: listingsReducer,
        }),
        applyMiddleware(sagaMiddleware),
    );

    appSagas.forEach((saga) => sagaMiddleware.run(saga));
    return store;
};
