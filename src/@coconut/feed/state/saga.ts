import { apply, put, select, takeLatest } from 'redux-saga/effects';

import { selectAccessToken } from '@coconut/accessToken';
import { Api } from '@coconut/api';
import { AccessToken, Listing, Thing } from '@coconut/models';
import {
    Resource,
    ResourceFetchAction,
    ResourceFetchParams,
    createResourceFetchFailAction,
    createResourceFetchSuccessAction,
} from '@coconut/resource';

import { FeedActions } from './reducer';
import { selectFeed, selectLastFeedFetchParams } from './selectors';

function* fetchFeedSaga(action: ResourceFetchAction<Resource.FEED>) {
    const accessToken: AccessToken | undefined = yield select(selectAccessToken);
    const api = new Api(accessToken?.access_token);
    try {
        const data: Thing<Listing> | undefined = yield apply(api, api.fetchResource, [
            Resource.FEED,
            action.params,
        ]);
        if (!data) {
            throw new Error('Received feed data is undefined');
        }

        const existingData: Thing<Listing> | undefined = yield select(selectFeed);
        const lastFeedFetchParams: ResourceFetchParams[Resource.FEED] | undefined = yield select(
            selectLastFeedFetchParams,
        );

        if (
            !existingData ||
            !lastFeedFetchParams ||
            lastFeedFetchParams.type !== action.params?.type
        ) {
            yield put(createResourceFetchSuccessAction(Resource.FEED, data, action.params));
            return;
        }

        data.data.children = [...existingData.data.children, ...data.data.children];
        yield put(createResourceFetchSuccessAction(Resource.FEED, data, action.params));
    } catch (error) {
        yield put(createResourceFetchFailAction(Resource.FEED, error as Error, action.params));
    }
}

export function* feedSaga() {
    yield takeLatest(FeedActions.FETCH, fetchFeedSaga);
}
