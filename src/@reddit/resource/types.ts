import { AccessToken } from '@reddit/models';

export enum Resource {
    ACCESS_TOKEN = 'access_token',
}

export type ResourceDataType = {
    [Resource.ACCESS_TOKEN]: AccessToken;
};

export type ResourceFetchParams = {
    [Resource.ACCESS_TOKEN]: {
        code: string;
        grant_type: 'authorization_code' | 'refresh_token';
        redirect_uri: string;
    };
};

export type ResourceSetParams = {
    [Resource.ACCESS_TOKEN]: undefined;
};

export type ResourceDeleteParams = {
    [Resource.ACCESS_TOKEN]: undefined;
};

export interface BaseAction {
    type: string;
}
