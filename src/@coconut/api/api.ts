/* eslint-disable no-restricted-imports */
import { Buffer } from '@craftzdog/react-native-buffer';

import { RedditConfig } from '@coconut/config';
import {
    AccessToken,
    Comment,
    Listing,
    ListingAndComments,
    Message,
    Profile,
    Thing,
} from '@coconut/models';
import {
    Resource,
    ResourceDeleteParams,
    ResourceFetchDataType,
    ResourceFetchParams,
    ResourceSetParams,
    ResourceUpdateParams,
} from '@coconut/resource/types';

import { ApiError, ContentType, Headers, RequestMethod } from './types';

const isSuccessStatusCode = (code: number) => code >= 200 && code < 400;

const handleResponse = async <T>(response: Response): Promise<T> => {
    const contentType = response.headers.get(Headers.CONTENT_TYPE);
    if (contentType && contentType.indexOf(ContentType.APPLICATION_JSON) !== -1) {
        return (await response.json()) as T;
    }

    return (await response.text()) as unknown as T;
};

export class Api {
    private accessToken?: string;

    constructor(accessToken?: string) {
        this.accessToken = accessToken;
    }

    private getHeaders() {
        if (this.accessToken) {
            return {
                [Headers.AUTHORIZATION]: `Bearer ${this.accessToken}`,
            };
        }

        const credentials = Buffer.from(`${RedditConfig.clientId}:`).toString('base64');
        return {
            [Headers.AUTHORIZATION]: `Basic ${credentials}`,
        };
    }

    private async get<T>(url: string, params?: URLSearchParams) {
        const finalUrl = params ? `${url}?${params.toString()}` : url;

        const response = await fetch(finalUrl, {
            method: RequestMethod.GET,
            headers: this.getHeaders(),
        });

        if (!isSuccessStatusCode(response.status)) {
            throw new ApiError(
                response.status,
                `GET request for ${finalUrl} failed with status: ${response.status}`,
            );
        }

        return handleResponse<T>(response);
    }

    private async post<T>(url: string, data: string | FormData, customHeaderType?: string) {
        const contentTypeHeader =
            typeof data === 'string'
                ? { [Headers.CONTENT_TYPE]: customHeaderType ?? ContentType.APPLICATION_JSON }
                : undefined;
        const response = await fetch(url, {
            method: RequestMethod.POST,
            headers: {
                ...this.getHeaders(),
                ...contentTypeHeader,
            },
            body: data,
        });

        if (!isSuccessStatusCode(response.status)) {
            throw new ApiError(
                response.status,
                `POST request for ${url} failed with status: ${response.status}`,
            );
        }

        return handleResponse<T>(response);
    }

    private async update<T>(url: string, data: string | FormData, customHeaderType?: string) {
        const contentTypeHeader =
            typeof data === 'string'
                ? { [Headers.CONTENT_TYPE]: customHeaderType ?? ContentType.APPLICATION_JSON }
                : undefined;
        const response = await fetch(url, {
            method: RequestMethod.PUT,
            headers: {
                ...this.getHeaders(),
                ...contentTypeHeader,
            },
            body: data,
        });

        if (!isSuccessStatusCode(response.status)) {
            throw new ApiError(
                response.status,
                `PUT request for ${url} failed with status: ${response.status}`,
            );
        }

        return handleResponse<T>(response);
    }

    private async delete<T>(url: string, params?: URLSearchParams) {
        const finalUrl = params ? `${url}?${params.toString()}` : url;

        const response = await fetch(finalUrl, {
            method: RequestMethod.DELETE,
            headers: this.getHeaders(),
        });

        if (!isSuccessStatusCode(response.status)) {
            throw new ApiError(
                response.status,
                `DELETE request for ${finalUrl} failed with status: ${response.status}`,
            );
        }

        return handleResponse<T>(response);
    }

    async fetchAccessToken(params: ResourceFetchParams[Resource.ACCESS_TOKEN]) {
        const data = new URLSearchParams(Object.entries(params));
        return this.post<AccessToken>(
            'https://www.reddit.com/api/v1/access_token',
            data.toString(),
            'application/x-www-form-urlencoded',
        );
    }

    async fetchProfile() {
        return this.get<Profile>(
            'https://oauth.reddit.com/api/v1/me',
            new URLSearchParams({ raw_json: '1' }),
        );
    }

    async fetchFeed(params: ResourceFetchParams[Resource.FEED]) {
        const searchParams = new URLSearchParams();
        searchParams.append('raw_json', '1');
        if (params?.after) {
            searchParams.append('after', params.after);
        }
        return this.get<Thing<Listing>>(`https://oauth.reddit.com/${params.type}`, searchParams);
    }

    async fetchMessages(params: ResourceFetchParams[Resource.MESSAGES]) {
        const searchParams = new URLSearchParams();
        searchParams.append('raw_json', '1');
        if (params?.after) {
            searchParams.append('after', params.after);
        }
        return this.get<Thing<Message>>(`https://oauth.reddit.com/message/inbox`, searchParams);
    }

    async fetchListing(params: ResourceFetchParams[Resource.LISTING]): Promise<ListingAndComments> {
        const searchParams = new URLSearchParams();
        searchParams.append('raw_json', '1');
        const listingAndComments = await this.get<[Thing<Listing>, Thing<Comment>]>(
            `https://oauth.reddit.com/${params.subreddit}/comments/${params.id}`,
            searchParams,
        );
        return {
            listing: listingAndComments[0],
            comments: listingAndComments[1],
        };
    }

    async fetchSubreddit(params: ResourceFetchParams[Resource.SUBREDDIT]) {
        const searchParams = new URLSearchParams();
        searchParams.append('raw_json', '1');
        if (params?.after) {
            searchParams.append('after', params.after);
        }

        return this.get<Thing<Listing>>(
            `https://oauth.reddit.com/${params.subreddit}/${params.type}`,
            searchParams,
        );
    }

    async search(params: ResourceFetchParams[Resource.SEARCH]) {
        const searchParams = new URLSearchParams();
        searchParams.append('raw_json', '1');
        searchParams.append('q', params.query);
        if (params.types && params.types.length) {
            searchParams.append('type', params.types.join(','));
        }
        return this.get<ResourceFetchDataType[Resource.SEARCH]>(
            `https://oauth.reddit.com/search`,
            searchParams,
        );
    }

    async fetchSubreddits() {
        const searchParams = new URLSearchParams();
        searchParams.append('raw_json', '1');
        searchParams.append('limit', '100');
        return this.get<ResourceFetchDataType[Resource.SUBREDDITS]>(
            `https://oauth.reddit.com/subreddits/mine/subscriber`,
            searchParams,
        );
    }

    async fetchResource<T extends Resource = Resource>(
        resource: T,
        params?: ResourceFetchParams[T],
    ) {
        switch (resource) {
            case Resource.ACCESS_TOKEN: {
                return this.fetchAccessToken(params as ResourceFetchParams[Resource.ACCESS_TOKEN]);
            }
            case Resource.PROFILE: {
                return this.fetchProfile();
            }
            case Resource.FEED: {
                return this.fetchFeed(params as ResourceFetchParams[Resource.FEED]);
            }
            case Resource.MESSAGES: {
                return this.fetchMessages(params as ResourceFetchParams[Resource.MESSAGES]);
            }
            case Resource.LISTING: {
                return this.fetchListing(params as ResourceFetchParams[Resource.LISTING]);
            }
            case Resource.SEARCH: {
                return this.search(params as ResourceFetchParams[Resource.SEARCH]);
            }
            case Resource.SUBREDDIT: {
                return this.fetchSubreddit(params as ResourceFetchParams[Resource.SUBREDDIT]);
            }
            case Resource.SUBREDDITS: {
                return this.fetchSubreddits();
            }
            default: {
                return undefined;
            }
        }
    }

    async setResource<T extends Resource = Resource>(
        resourceName: T,
        params?: ResourceSetParams[T], // eslint-disable-line @typescript-eslint/no-unused-vars
    ) {
        switch (resourceName) {
            default: {
                return undefined;
            }
        }
    }

    async updateResource<T extends Resource = Resource>(
        resourceName: T,
        params?: ResourceUpdateParams[T], // eslint-disable-line @typescript-eslint/no-unused-vars
    ) {
        switch (resourceName) {
            default: {
                return undefined;
            }
        }
    }

    async deleteResource<T extends Resource = Resource>(
        resourceName: T,
        params: ResourceDeleteParams[T], // eslint-disable-line @typescript-eslint/no-unused-vars
    ) {
        switch (resourceName) {
            default: {
                return undefined;
            }
        }
    }
}
