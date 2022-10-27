/* eslint-disable no-restricted-imports */
import { Resource } from '@coconut/resource/types';
import { GlobalState } from '@coconut/state/types';

export const selectAccessToken = (state: GlobalState) => state[Resource.ACCESS_TOKEN].fetch.data;
