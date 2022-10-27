import {
    AccessToken,
    AccessTokenFetchParams,
    FeedFetchParams,
    Listing,
    Message,
    MessagesFetchParams,
    Profile,
    Thing,
} from '@coconut/models';

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
    [Resource.ACCESS_TOKEN]: AccessTokenFetchParams;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: FeedFetchParams;
    [Resource.MESSAGES]: MessagesFetchParams;
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
