/* eslint-disable import/no-cycle */
import { Comment } from './comment';
import { Listing } from './listing';
import { Message } from './message';
import { Subreddit } from './subreddit';

export interface Thing<T extends Listing | Message | Comment | Subreddit> {
    kind: string;
    data: {
        after?: string;
        before?: string;
        dist: number;
        modhash?: string;
        geo_filter?: string;
        children: T[];
    };
}
