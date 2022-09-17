/* eslint-disable no-restricted-imports */
import { GlobalState } from '@coconut/state/types';

export const selectMessages = (state: GlobalState) => state.messages.fetch.data;
