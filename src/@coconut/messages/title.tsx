import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

interface Props {
    messageType: string;
    author: string;
    subject: string;
}

const MessageTitle = ({ messageType, author, subject }: Props) => {
    const styles = useStyles();
    const displayText = messageType === 'post_reply' ? `${author} replied to your post` : subject;

    return (
        <Text style={styles.title} numberOfLines={2}>
            {displayText}
        </Text>
    );
};

const useStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        title: {
            color: theme['color-info-400'],
            marginBottom: Dimensions.ternarySpacing,
        },
    });
};

export default MessageTitle;
