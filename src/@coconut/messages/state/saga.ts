import { apply, put, select, takeLatest } from 'redux-saga/effects';

import { Api } from '@coconut/api';
import { AccessToken, Message, Thing } from '@coconut/models';
import {
    Resource,
    ResourceFetchAction,
    createResourceFetchFailAction,
    createResourceFetchSuccessAction,
    selectResourceFetchData,
} from '@coconut/resource';

import { MessagesActions } from './reducer';

function* fetchMessagesSaga(action: ResourceFetchAction<Resource.MESSAGES>) {
    const accessToken: AccessToken | undefined = yield select(
        selectResourceFetchData(Resource.ACCESS_TOKEN),
    );
    const api = new Api(accessToken?.access_token);
    try {
        const data: Thing<Message> | undefined = yield apply(api, api.fetchResource, [
            Resource.MESSAGES,
            action.params,
        ]);
        if (!data) {
            throw new Error('Received messages data is undefined');
        }

        const existingData: Thing<Message> | undefined = yield select(
            selectResourceFetchData(Resource.MESSAGES),
        );

        if (!existingData) {
            yield put(createResourceFetchSuccessAction(Resource.MESSAGES, data, action.params));
            return;
        }

        data.data.children = [...existingData.data.children, ...data.data.children];
        yield put(createResourceFetchSuccessAction(Resource.MESSAGES, data, action.params));
    } catch (error) {
        yield put(createResourceFetchFailAction(Resource.MESSAGES, error as Error, action.params));
    }
}

export function* messagesSaga() {
    yield takeLatest(MessagesActions.FETCH, fetchMessagesSaga);
}
