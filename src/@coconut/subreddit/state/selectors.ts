/* eslint-disable no-restricted-imports */
import { GlobalState } from '@coconut/state/types';

export const selectLastSubredditFetchParams = (state: GlobalState) => state.subreddit.fetch.params;
