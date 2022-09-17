import { Listing } from './listing';

export interface Thing<T extends Listing> {
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
