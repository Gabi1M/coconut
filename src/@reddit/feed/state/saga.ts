import { takeLatest } from 'redux-saga/effects';

import { Resource, createResourceFetchSaga } from '@reddit/resource';

import { FeedActions } from './reducer';

export function* feedSaga() {
    yield takeLatest(FeedActions.FETCH, createResourceFetchSaga(Resource.FEED));
}
