import { AccessToken, Listing, Message, PostSorting, Profile, Thing } from '@coconut/models';

export enum Resource {
    ACCESS_TOKEN = 'access_token',
    PROFILE = 'profile',
    FEED = 'feed',
    MESSAGES = 'messages',
}

export type ResourceDataType = {
    [Resource.ACCESS_TOKEN]: AccessToken;
    [Resource.PROFILE]: Profile;
    [Resource.FEED]: Thing<Listing>;
    [Resource.MESSAGES]: Thing<Message>;
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
    [Resource.MESSAGES]: {
        after?: string;
    };
};

export type ResourceSetParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
};

export type ResourceDeleteParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
};

export interface BaseAction {
    type: string;
}
