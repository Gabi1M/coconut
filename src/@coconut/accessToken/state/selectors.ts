/* eslint-disable no-restricted-imports */
import { GlobalState } from '@coconut/state/types';

export const selectAccessToken = (state: GlobalState) => state.accessToken.fetch.data;
