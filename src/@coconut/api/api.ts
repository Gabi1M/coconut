/* eslint-disable no-restricted-imports */
import { Buffer } from '@craftzdog/react-native-buffer';

import { RedditInfo } from '@coconut/info';
import { AccessToken, Listing, Message, Profile, Thing } from '@coconut/models';
import {
    Resource,
    ResourceDeleteParams,
    ResourceFetchParams,
    ResourceSetParams,
} from '@coconut/resource/types';

import { ApiError } from './types';

enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
}

export class Api {
    private accessToken?: string;

    constructor(accessToken?: string) {
        this.accessToken = accessToken;
    }

    setAccessToken(accessToken: string) {
        this.accessToken = accessToken;
    }

    private getHeaders() {
        if (this.accessToken) {
            return {
                Authorization: `Bearer ${this.accessToken}`,
            };
        }

        const credentials = Buffer.from(`${RedditInfo.clientId}:`).toString('base64');
        return {
            Authorization: `Basic ${credentials}`,
        };
    }

    private async getJSON<T>(url: string, params?: URLSearchParams) {
        const finalUrl = params ? `${url}?${params.toString()}` : url;

        const response = await fetch(finalUrl, {
            method: RequestMethod.GET,
            headers: this.getHeaders(),
        });

        if (response.status !== 200 && response.status !== 201) {
            throw new ApiError(
                response.status,
                `GET request for ${finalUrl} failed with status: ${response.status}`,
            );
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
            return (await response.json()) as T;
        }

        return (await response.text()) as unknown as T;
    }

    private async postJSON<T>(url: string, data: string, customContentType?: string) {
        const response = await fetch(url, {
            method: RequestMethod.POST,
            headers: {
                ...this.getHeaders(),
                'Content-Type': customContentType ?? 'application/json',
            },
            body: data,
        });

        if (response.status !== 200 && response.status !== 201) {
            throw new ApiError(
                response.status,
                `POST request for ${url} failed with status: ${response.status}`,
            );
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
            return (await response.json()) as T;
        }

        return (await response.text()) as unknown as T;
    }

    private async postFormData<T>(url: string, data: FormData) {
        const response = await fetch(url, {
            method: RequestMethod.POST,
            headers: {
                ...this.getHeaders(),
            },
            body: data,
        });

        if (response.status !== 200 && response.status !== 201) {
            throw new ApiError(
                response.status,
                `POST request for ${url} failed with status: ${response.status}`,
            );
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
            return (await response.json()) as T;
        }

        return (await response.text()) as unknown as T;
    }

    private async delete<T>(url: string, params?: URLSearchParams) {
        const finalUrl = params ? `${url}?${params.toString()}` : url;

        const response = await fetch(finalUrl, {
            method: RequestMethod.DELETE,
            headers: this.getHeaders(),
        });

        if (response.status !== 200 && response.status !== 201) {
            throw new ApiError(
                response.status,
                `DELETE request for ${finalUrl} failed with status: ${response.status}`,
            );
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
            return (await response.json()) as T;
        }

        return (await response.text()) as unknown as T;
    }

    async fetchAccessToken(params: ResourceFetchParams[Resource.ACCESS_TOKEN]) {
        const data = new URLSearchParams(Object.entries(params));
        return this.postJSON<AccessToken>(
            'https://www.reddit.com/api/v1/access_token',
            data.toString(),
            'application/x-www-form-urlencoded',
        );
    }

    async fetchProfile() {
        return this.getJSON<Profile>(
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
        return this.getJSON<Thing<Listing>>(
            `https://oauth.reddit.com/${params.type}`,
            searchParams,
        );
    }

    async fetchMessages(params: ResourceFetchParams[Resource.MESSAGES]) {
        const searchParams = new URLSearchParams();
        searchParams.append('raw_json', '1');
        if (params?.after) {
            searchParams.append('after', params.after);
        }
        return this.getJSON<Thing<Message>>(`https://oauth.reddit.com/message/inbox`, searchParams);
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
