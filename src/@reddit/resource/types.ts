import { AccessToken, Profile } from '@reddit/models';

export enum Resource {
    ACCESS_TOKEN = 'access_token',
    PROFILE = 'profile',
}

export type ResourceDataType = {
    [Resource.ACCESS_TOKEN]: AccessToken;
    [Resource.PROFILE]: Profile;
};

export type ResourceFetchParams = {
    [Resource.ACCESS_TOKEN]: {
        code: string;
        grant_type: 'authorization_code' | 'refresh_token';
        redirect_uri: string;
    };
    [Resource.PROFILE]: undefined;
};

export type ResourceSetParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
};

export type ResourceDeleteParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
};

export interface BaseAction {
    type: string;
}
