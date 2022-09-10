/* eslint-disable no-restricted-imports */
import { ResourceState } from '@reddit/resource/createResourceReducer';
import { Resource } from '@reddit/resource/types';

export interface GlobalState {
    accessToken: ResourceState<Resource.ACCESS_TOKEN>;
    profile: ResourceState<Resource.PROFILE>;
    feed: ResourceState<Resource.FEED>;
}
