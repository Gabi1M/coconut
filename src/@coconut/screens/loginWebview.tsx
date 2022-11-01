import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';

import CookieManager from '@react-native-cookies/cookies';

import { RedditConfig } from '@coconut/config';
import { SafeArea } from '@coconut/generic';
import { NavigationHeader } from '@coconut/navigation';
import { Resource, useFetchResource } from '@coconut/resource';

const LoginWebviewScreen = () => {
    const fetchAccessToken = useFetchResource(Resource.ACCESS_TOKEN);
    const [receivedCode, setReceivedCode] = React.useState(false);

    React.useEffect(() => {
        CookieManager.clearAll();
    }, []);

    const onNavigationStateChange = React.useCallback(
        (e: WebViewNavigation) => {
            if (e.url.startsWith(RedditConfig.redirectUrl)) {
                const code = new URL(e.url).searchParams.get('code');
                if (code && !receivedCode) {
                    setReceivedCode(true);
                    fetchAccessToken({
                        code,
                        grant_type: 'authorization_code',
                        redirect_uri: RedditConfig.redirectUrl,
                    });
                }
            }
        },
        [receivedCode, setReceivedCode, fetchAccessToken],
    );

    return (
        <SafeArea>
            <NavigationHeader />
            <WebView
                incognito={true}
                style={styles.root}
                source={{ uri: RedditConfig.generateAuthUri() }}
                onNavigationStateChange={onNavigationStateChange}
                domStorageEnabled={false}
                thirdPartyCookiesEnabled={false}
            />
        </SafeArea>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default LoginWebviewScreen;
