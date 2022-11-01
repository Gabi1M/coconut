import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

interface Props {
    author: string;
    subreddit?: string;
    messageType: string;
}

const MessageDetails = ({ subreddit, author, messageType }: Props) => {
    const styles = useStyles();
    const displayText =
        messageType === 'post_reply' ? `${author} in ${subreddit}` : `From ${author}`;

    return (
        <View style={styles.root}>
            <Text style={styles.text}>{displayText}</Text>
        </View>
    );
};

const useStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        root: {
            marginTop: Dimensions.ternarySpacing,
        },
        text: {
            color: theme['color-info-400'],
        },
    });
};

export default MessageDetails;
