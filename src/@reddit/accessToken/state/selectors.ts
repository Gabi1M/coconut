/* eslint-disable no-restricted-imports */
import { GlobalState } from '@reddit/state/types';

export const selectAccessToken = (state: GlobalState) => state.accessToken.fetch.data;
