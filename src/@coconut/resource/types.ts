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
    SearchParams,
    Subreddit,
    SubredditFetchParams,
    Thing,
} from '@coconut/models';

export enum Resource {
    ACCESS_TOKEN = 'access_token',
    PROFILE = 'profile',
    FEED = 'feed',
    MESSAGES = 'messages',
    LISTING = 'listing',
    SEARCH = 'search',
    SUBREDDIT = 'subreddit',
    SUBREDDITS = 'subreddits',
}

export type ResourceFetchDataType = {
    [Resource.ACCESS_TOKEN]: AccessToken;
    [Resource.PROFILE]: Profile;
    [Resource.FEED]: Thing<Listing>;
    [Resource.MESSAGES]: Thing<Message>;
    [Resource.LISTING]: ListingAndComments;
    [Resource.SEARCH]: Thing<Subreddit | Listing>;
    [Resource.SUBREDDIT]: Thing<Listing>;
    [Resource.SUBREDDITS]: Thing<Subreddit>;
};

export type ResourceSetDataType = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
    [Resource.SEARCH]: undefined;
    [Resource.SUBREDDIT]: undefined;
    [Resource.SUBREDDITS]: undefined;
};

export type ResourceUpdateDataType = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
    [Resource.SEARCH]: undefined;
    [Resource.SUBREDDIT]: undefined;
    [Resource.SUBREDDITS]: undefined;
};

export type ResourceDeleteDataType = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
    [Resource.SEARCH]: undefined;
    [Resource.SUBREDDIT]: undefined;
    [Resource.SUBREDDITS]: undefined;
};

export type ResourceFetchParams = {
    [Resource.ACCESS_TOKEN]: AccessTokenFetchParams;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: FeedFetchParams;
    [Resource.MESSAGES]: MessagesFetchParams;
    [Resource.LISTING]: ListingFetchParams;
    [Resource.SEARCH]: SearchParams;
    [Resource.SUBREDDIT]: SubredditFetchParams;
    [Resource.SUBREDDITS]: undefined;
};

export type ResourceSetParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
    [Resource.SEARCH]: undefined;
    [Resource.SUBREDDIT]: undefined;
    [Resource.SUBREDDITS]: undefined;
};

export type ResourceUpdateParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
    [Resource.SEARCH]: undefined;
    [Resource.SUBREDDIT]: undefined;
    [Resource.SUBREDDITS]: undefined;
};

export type ResourceDeleteParams = {
    [Resource.ACCESS_TOKEN]: undefined;
    [Resource.PROFILE]: undefined;
    [Resource.FEED]: undefined;
    [Resource.MESSAGES]: undefined;
    [Resource.LISTING]: undefined;
    [Resource.SEARCH]: undefined;
    [Resource.SUBREDDIT]: undefined;
    [Resource.SUBREDDITS]: undefined;
};

export interface BaseAction {
    type: string;
}
