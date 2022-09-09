/* eslint-disable no-restricted-imports */
import { GlobalState } from '@reddit/state/types';

export const selectListings = (state: GlobalState) => state.listings.fetch.data;
