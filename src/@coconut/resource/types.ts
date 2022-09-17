import { AccessToken, ListingResult, PostSorting, Profile } from '@coconut/models';

export enum Resource {
    ACCESS_TOKEN = 'access_token',
    PROFILE = 'profile',
    FEED = 'feed',
}

export type ResourceDataType = {
    [Resource.ACCESS_TOKEN]: AccessToken;
    [Resource.PROFILE]: Profile;
    [Resource.FEED]: ListingResult;
};

export type ResourceFetchParams = {
    [Resource.ACCESS_TOKEN]: {
        code: string;
        grant_type: 'authorization_code' | 'refresh_token';
        redirect_uri: string;
    };
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: {
        type: PostSorting;
        after?: string;
    };
};

export type ResourceSetParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
};

export type ResourceDeleteParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
};

export interface BaseAction {
    type: string;
}
