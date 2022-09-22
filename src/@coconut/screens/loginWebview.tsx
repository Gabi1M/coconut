import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { RedditInfo } from '@coconut/info';
import { Resource, useFetchResource } from '@coconut/resource';

const LoginWebviewScreen = () => {
    const fetchAccessToken = useFetchResource(Resource.ACCESS_TOKEN);

    return (
        <WebView
            style={styles.root}
            source={{ uri: RedditInfo.generateAuthUri() }}
            onNavigationStateChange={(e) => {
                if (e.url.startsWith('http://www.example.com/unused/redirect/uri')) {
                    const code = new URL(e.url).searchParams.get('code');
                    if (code) {
                        fetchAccessToken({
                            code,
                            grant_type: 'authorization_code',
                            redirect_uri: 'http://www.example.com/unused/redirect/uri',
                        });
                    }
                }
            }}
            sharedCookiesEnabled={false}
            domStorageEnabled={false}
            thirdPartyCookiesEnabled={false}
        />
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default LoginWebviewScreen;
