import { takeLatest } from 'redux-saga/effects';

import { Resource, createResourceFetchSaga } from '@coconut/resource';

import { CommentsActions } from './reducer';

export function* commentsSaga() {
    yield takeLatest(CommentsActions.FETCH, createResourceFetchSaga(Resource.COMMENTS));
}
