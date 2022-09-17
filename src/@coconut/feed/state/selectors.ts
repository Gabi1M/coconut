/* eslint-disable no-restricted-imports */
import { GlobalState } from '@coconut/state/types';

export const selectFeed = (state: GlobalState) => state.feed.fetch.data;

export const selectLastFeedFetchParams = (state: GlobalState) => state.feed.fetch.params;
