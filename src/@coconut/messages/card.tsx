import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { RenderHTML } from 'react-native-render-html';

import { Text } from '@ui-kitten/components';

import { Message } from '@coconut/models';

interface Props {
    message: Message;
}

const MessageCard = ({ message }: Props) => {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.root}>
            <Text style={styles.title} numberOfLines={2}>
                {message.data.subject}
            </Text>
            <RenderHTML
                tagsStyles={tagsStyles}
                contentWidth={width}
                source={{ html: message.data.body_html }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        marginVertical: 5,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#1F2428',
    },
    title: {
        marginBottom: 5,
    },
});

const tagsStyles = {
    body: {
        color: 'white',
    },
};

export default MessageCard;
