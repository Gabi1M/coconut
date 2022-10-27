import {
    AccessToken,
    AccessTokenFetchParams,
    Comments,
    CommentsFetchParams,
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
    COMMENTS = 'comments',
}

export type ResourceFetchDataType = {
    [Resource.ACCESS_TOKEN]: AccessToken;
    [Resource.PROFILE]: Profile;
    [Resource.FEED]: Thing<Listing>;
    [Resource.MESSAGES]: Thing<Message>;
    [Resource.COMMENTS]: Comments;
};

export type ResourceSetDataType = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.COMMENTS]: undefined;
};

export type ResourceUpdateDataType = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.COMMENTS]: undefined;
};

export type ResourceDeleteDataType = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.COMMENTS]: undefined;
};

export type ResourceFetchParams = {
    [Resource.ACCESS_TOKEN]: AccessTokenFetchParams;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: FeedFetchParams;
    [Resource.MESSAGES]: MessagesFetchParams;
    [Resource.COMMENTS]: CommentsFetchParams;
};

export type ResourceSetParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.COMMENTS]: undefined;
};

export type ResourceUpdateParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.COMMENTS]: undefined;
};

export type ResourceDeleteParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.COMMENTS]: undefined;
};

export interface BaseAction {
    type: string;
}
