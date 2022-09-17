/* eslint-disable no-restricted-imports */
import { GlobalState } from '@coconut/state/types';

export const selectProfile = (state: GlobalState) => state.profile.fetch.data;
