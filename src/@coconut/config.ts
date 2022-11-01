/* eslint-disable @typescript-eslint/naming-convention */
import uuid from 'react-native-uuid';

/* eslint-disable-next-line import/no-unresolved */
import { REDDIT_CLIENT_ID, REDDIT_REDIRECT_URL } from '@env';

import { AuthScope } from './models';

const CLIENT_ID = REDDIT_CLIENT_ID as string;
const REDIRECT_URL = REDDIT_REDIRECT_URL as string;

export const RedditConfig = Object.freeze({
    clientId: CLIENT_ID,
    redirectUrl: REDIRECT_URL,
    generateAuthUri: () => {
        const scopes = Object.values(AuthScope)
            .filter((item) => isNaN(Number(item)))
            .join(' ');
        return `https://www.reddit.com/api/v1/authorize.compact?client_id=${CLIENT_ID}&response_type=code&state=${uuid.v4()}&redirect_uri=${REDIRECT_URL}&duration=permanent&scope=${scopes}`;
    },
});
