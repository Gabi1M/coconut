/* eslint-disable no-restricted-imports */
import { GlobalState } from '@reddit/state/types';

export const selectFeed = (state: GlobalState) => state.feed.fetch.data;
