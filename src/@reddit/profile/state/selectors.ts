/* eslint-disable no-restricted-imports */
import { GlobalState } from '@reddit/state/types';

export const selectProfile = (state: GlobalState) => state.profile.fetch.data;
