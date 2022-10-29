import { ThingItemKind } from './types';

export interface SearchParams {
    query: string;
    types?: ThingItemKind[];
}
