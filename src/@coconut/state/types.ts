/* eslint-disable no-restricted-imports */
import { ResourceState } from '@coconut/resource/createResourceReducer';
import { Resource } from '@coconut/resource/types';

export interface GlobalState {
    [Resource.ACCESS_TOKEN]: ResourceState<Resource.ACCESS_TOKEN>;
    [Resource.PROFILE]: ResourceState<Resource.PROFILE>;
    [Resource.FEED]: ResourceState<Resource.FEED>;
    [Resource.MESSAGES]: ResourceState<Resource.MESSAGES>;
    [Resource.LISTING]: ResourceState<Resource.LISTING>;
}
