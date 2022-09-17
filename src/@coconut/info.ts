/* eslint-disable @typescript-eslint/naming-convention */
import uuid from 'react-native-uuid';

import { AuthScope } from './models';

const CLIENT_ID = 'BNDJ4PbNk7aBI4WBFY-7aA';
const REDIRECT_URL = 'http://www.example.com/unused/redirect/uri';

export const RedditInfo = Object.freeze({
    clientId: CLIENT_ID,
    redirectUrl: REDIRECT_URL,
    generateAuthUri: () => {
        const scopes = Object.values(AuthScope)
            .filter((item) => isNaN(Number(item)))
            .join(' ');
        return `https://www.reddit.com/api/v1/authorize.compact?client_id=${CLIENT_ID}&response_type=code&state=${uuid.v4()}&redirect_uri=${REDIRECT_URL}&duration=permanent&scope=${scopes}`;
    },
});
