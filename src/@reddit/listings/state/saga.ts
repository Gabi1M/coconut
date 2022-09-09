import { takeLatest } from 'redux-saga/effects';

import { Resource, createResourceFetchSaga } from '@reddit/resource';

import { ListingsActions } from './reducer';

export function* listingsSaga() {
    yield takeLatest(ListingsActions.FETCH, createResourceFetchSaga(Resource.LISTINGS));
}
