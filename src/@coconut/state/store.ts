import { applyMiddleware, combineReducers, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { accessTokenReducer, accessTokenSaga } from '@coconut/accessToken';
import { commentsReducer, commentsSaga } from '@coconut/comments';
import { feedReducer, feedSaga } from '@coconut/feed';
import { messagesReducer, messagesSaga } from '@coconut/messages';
import { profileReducer, profileSaga } from '@coconut/profile';
import { Resource } from '@coconut/resource';

import { startupSaga } from './startupSaga';
import { GlobalState } from './types';

export const createStore = () => {
    const appSagas = [
        accessTokenSaga,
        profileSaga,
        feedSaga,
        messagesSaga,
        commentsSaga,
        startupSaga,
    ];

    const sagaMiddleware = createSagaMiddleware();
    const store = createReduxStore(
        combineReducers<GlobalState>({
            [Resource.ACCESS_TOKEN]: accessTokenReducer,
            [Resource.PROFILE]: profileReducer,
            [Resource.FEED]: feedReducer,
            [Resource.MESSAGES]: messagesReducer,
            [Resource.COMMENTS]: commentsReducer,
        }),
        applyMiddleware(sagaMiddleware),
    );

    appSagas.forEach((saga) => sagaMiddleware.run(saga));
    return store;
};
