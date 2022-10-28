/* eslint-disable import/no-cycle */
import { Comment } from './comment';
import { Listing } from './listing';
import { Message } from './message';

export interface Thing<T extends Listing | Message | Comment> {
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
