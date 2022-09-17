import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@ui-kitten/components';

interface Props {
    title: string;
}

const PostTitle = ({ title }: Props) => (
    <Text style={styles.root} numberOfLines={2}>
        {title}
    </Text>
);

const styles = StyleSheet.create({
    root: {
        marginBottom: 5,
    },
});

export default PostTitle;
