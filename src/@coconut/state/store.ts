import { applyMiddleware, combineReducers, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { accessTokenReducer, accessTokenSaga } from '@coconut/accessToken';
import { feedReducer, feedSaga } from '@coconut/feed';
import { listingReducer, listingSaga } from '@coconut/listing';
import { messagesReducer, messagesSaga } from '@coconut/messages';
import { profileReducer, profileSaga } from '@coconut/profile';
import { Resource } from '@coconut/resource';
import { subredditsReducer, subredditsSaga } from '@coconut/subreddits';

import { startupSaga } from './startupSaga';
import { GlobalState } from './types';

export const createStore = () => {
    const appSagas = [
        accessTokenSaga,
        profileSaga,
        feedSaga,
        messagesSaga,
        listingSaga,
        subredditsSaga,
        startupSaga,
    ];

    const sagaMiddleware = createSagaMiddleware();
    const store = createReduxStore(
        combineReducers<GlobalState>({
            [Resource.ACCESS_TOKEN]: accessTokenReducer,
            [Resource.PROFILE]: profileReducer,
            [Resource.FEED]: feedReducer,
            [Resource.MESSAGES]: messagesReducer,
            [Resource.LISTING]: listingReducer,
            [Resource.SUBREDDITS]: subredditsReducer,
        }),
        applyMiddleware(sagaMiddleware),
    );

    appSagas.forEach((saga) => sagaMiddleware.run(saga));
    return store;
};
