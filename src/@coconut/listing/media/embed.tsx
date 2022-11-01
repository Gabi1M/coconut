import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { useTheme } from '@ui-kitten/components';

import { MediaEmbed } from '@coconut/models';

interface Props {
    embed: MediaEmbed;
}

const ListingMediaEmbed = ({ embed }: Props) => {
    const theme = useTheme();
    return (
        <View style={styles.root}>
            <WebView
                source={{
                    html: `
                    <html>
                        <head>
                        </head>
                        <body style="background-color:${theme['color-basic-1100']}">
                            ${embed.html}
                        </body>
                    </html>
                `,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        height: 200,
    },
});

export default ListingMediaEmbed;
