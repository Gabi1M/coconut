import { apply, put, select, takeLatest } from 'redux-saga/effects';

import { Api } from '@coconut/api';
import { AccessToken, Listing, Thing } from '@coconut/models';
import {
    Resource,
    ResourceFetchAction,
    ResourceFetchParams,
    createResourceFetchFailAction,
    createResourceFetchSuccessAction,
    selectResourceFetchData,
} from '@coconut/resource';

import { SubredditActions } from './reducer';
import { selectLastSubredditFetchParams } from './selectors';

function* fetchSubredditSaga(action: ResourceFetchAction<Resource.SUBREDDIT>) {
    const accessToken: AccessToken | undefined = yield select(
        selectResourceFetchData(Resource.ACCESS_TOKEN),
    );
    const api = new Api(accessToken?.access_token);
    try {
        const data: Thing<Listing> | undefined = yield apply(api, api.fetchResource, [
            Resource.SUBREDDIT,
            action.params,
        ]);
        if (!data) {
            throw new Error('Received subreddit data is undefined');
        }

        const existingData: Thing<Listing> | undefined = yield select(
            selectResourceFetchData(Resource.SUBREDDIT),
        );
        const lastSubredditFetchParams: ResourceFetchParams[Resource.SUBREDDIT] | undefined =
            yield select(selectLastSubredditFetchParams);

        if (
            !existingData ||
            !lastSubredditFetchParams ||
            lastSubredditFetchParams.type !== action.params?.type
        ) {
            yield put(createResourceFetchSuccessAction(Resource.SUBREDDIT, data, action.params));
            return;
        }

        data.data.children = [...existingData.data.children, ...data.data.children];
        yield put(createResourceFetchSuccessAction(Resource.SUBREDDIT, data, action.params));
    } catch (error) {
        yield put(createResourceFetchFailAction(Resource.SUBREDDIT, error as Error, action.params));
    }
}

export function* subredditSaga() {
    yield takeLatest(SubredditActions.FETCH, fetchSubredditSaga);
}
