import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, TextProps } from '@ui-kitten/components';

interface Props extends Pick<TextProps, 'category'> {
    title: string;
}

const PostTitle = ({ title, category }: Props) => (
    <Text category={category} style={styles.root} numberOfLines={2}>
        {title}
    </Text>
);

const styles = StyleSheet.create({
    root: {
        marginBottom: 5,
    },
});

export default PostTitle;
