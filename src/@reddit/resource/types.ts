import { AccessToken, ListingResult, Profile } from '@reddit/models';

export enum Resource {
    ACCESS_TOKEN = 'access_token',
    PROFILE = 'profile',
    LISTINGS = 'listings',
}

export type ResourceDataType = {
    [Resource.ACCESS_TOKEN]: AccessToken;
    [Resource.PROFILE]: Profile;
    [Resource.LISTINGS]: ListingResult;
};

export type ResourceFetchParams = {
    [Resource.ACCESS_TOKEN]: {
        code: string;
        grant_type: 'authorization_code' | 'refresh_token';
        redirect_uri: string;
    };
    [Resource.PROFILE]: undefined;
    [Resource.LISTINGS]: {
        type: 'best' | 'hot' | 'new' | 'rising';
    };
};

export type ResourceSetParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.LISTINGS]: undefined;
};

export type ResourceDeleteParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.LISTINGS]: undefined;
};

export interface BaseAction {
    type: string;
}
