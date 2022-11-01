import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { accessTokenReducer, accessTokenSaga } from '@coconut/accessToken';
import { feedReducer, feedSaga } from '@coconut/feed';
import { listingReducer, listingSaga } from '@coconut/listing';
import { messagesReducer, messagesSaga } from '@coconut/messages';
import { profileReducer, profileSaga } from '@coconut/profile';
import { Resource } from '@coconut/resource';
import { searchReducer, searchSaga } from '@coconut/search';
import { subredditReducer, subredditSaga } from '@coconut/subreddit';
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
        searchSaga,
        subredditSaga,
        subredditsSaga,
        startupSaga,
    ];

    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: combineReducers<GlobalState>({
            [Resource.ACCESS_TOKEN]: accessTokenReducer,
            [Resource.PROFILE]: profileReducer,
            [Resource.FEED]: feedReducer,
            [Resource.MESSAGES]: messagesReducer,
            [Resource.LISTING]: listingReducer,
            [Resource.SEARCH]: searchReducer,
            [Resource.SUBREDDIT]: subredditReducer,
            [Resource.SUBREDDITS]: subredditsReducer,
        }),
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                immutableCheck: false,
                serializableCheck: false,
            }).concat(sagaMiddleware),
    });

    appSagas.forEach((saga) => sagaMiddleware.run(saga));
    return store;
};
