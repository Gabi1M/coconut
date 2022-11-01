export enum SearchItemType {
    SUBREDDIT = 'sr',
    LINK = 'link',
    USER = 'user',
}

export const SearchItemTypeLabel = {
    [SearchItemType.SUBREDDIT]: 'Subreddits',
    [SearchItemType.LINK]: 'Posts',
    [SearchItemType.USER]: 'Users',
};

export interface SearchParams {
    query: string;
    types?: SearchItemType[];
}
