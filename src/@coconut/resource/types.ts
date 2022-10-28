import {
    AccessToken,
    AccessTokenFetchParams,
    FeedFetchParams,
    Listing,
    ListingAndComments,
    ListingFetchParams,
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
    LISTING = 'listing',
}

export type ResourceFetchDataType = {
    [Resource.ACCESS_TOKEN]: AccessToken;
    [Resource.PROFILE]: Profile;
    [Resource.FEED]: Thing<Listing>;
    [Resource.MESSAGES]: Thing<Message>;
    [Resource.LISTING]: ListingAndComments;
};

export type ResourceSetDataType = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
};

export type ResourceUpdateDataType = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
};

export type ResourceDeleteDataType = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
};

export type ResourceFetchParams = {
    [Resource.ACCESS_TOKEN]: AccessTokenFetchParams;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: FeedFetchParams;
    [Resource.MESSAGES]: MessagesFetchParams;
    [Resource.LISTING]: ListingFetchParams;
};

export type ResourceSetParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
};

export type ResourceUpdateParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
};

export type ResourceDeleteParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
};

export interface BaseAction {
    type: string;
}
