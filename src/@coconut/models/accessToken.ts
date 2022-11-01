export interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    refresh_token: string;
}

export interface AccessTokenFetchParams {
    code: string;
    grant_type: 'authorization_code' | 'refresh_token';
    redirect_uri: string;
}
