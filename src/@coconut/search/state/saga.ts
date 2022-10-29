import { takeLatest } from 'redux-saga/effects';

import { Resource, createResourceFetchSaga } from '@coconut/resource';

import { SearchActions } from './reducer';

export function* searchSaga() {
    yield takeLatest(SearchActions.FETCH, createResourceFetchSaga(Resource.SEARCH));
}
