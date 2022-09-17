/* eslint-disable no-restricted-imports */
import { ResourceState } from '@coconut/resource/createResourceReducer';
import { Resource } from '@coconut/resource/types';

export interface GlobalState {
    accessToken: ResourceState<Resource.ACCESS_TOKEN>;
    profile: ResourceState<Resource.PROFILE>;
    feed: ResourceState<Resource.FEED>;
    messages: ResourceState<Resource.MESSAGES>;
}
