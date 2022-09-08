/* eslint-disable @typescript-eslint/naming-convention */
import uuid from 'react-native-uuid';

const CLIENT_ID = 'NzvRCnjcc_qZrtkH2cAkwg';
const REDIRECT_URL = 'http://www.example.com/unused/redirect/uri';

export const RedditInfo = Object.freeze({
    clientId: CLIENT_ID,
    redirectUrl: REDIRECT_URL,
    generateAuthUri: () =>
        `https://www.reddit.com/api/v1/authorize.compact?client_id=${CLIENT_ID}&response_type=code&state=${uuid.v4()}&redirect_uri=${REDIRECT_URL}&duration=permanent&scope=identity`,
});
