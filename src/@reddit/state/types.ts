import { Resource, ResourceState } from '@reddit/resource';

export interface GlobalState {
    accessToken: ResourceState<Resource.ACCESS_TOKEN>;
}
