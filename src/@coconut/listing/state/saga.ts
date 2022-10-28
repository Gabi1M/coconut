import { takeLatest } from 'redux-saga/effects';

import { Resource, createResourceFetchSaga } from '@coconut/resource';

import { ListingActions } from './reducer';

export function* listingSaga() {
    yield takeLatest(ListingActions.FETCH, createResourceFetchSaga(Resource.LISTING));
}
