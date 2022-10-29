import { takeLatest } from 'redux-saga/effects';

import { Resource, createResourceFetchSaga } from '@coconut/resource';

import { SubredditsActions } from './reducer';

export function* subredditsSaga() {
    yield takeLatest(SubredditsActions.FETCH, createResourceFetchSaga(Resource.SUBREDDITS));
}
