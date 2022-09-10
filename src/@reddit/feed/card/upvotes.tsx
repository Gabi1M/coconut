import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, Text } from '@ui-kitten/components';

interface Props {
    votes: number;
}

const PostVotes = ({ votes }: Props) => (
    <View style={styles.root}>
        <Icon style={styles.icon} fill='green' name='arrow-upward-outline' />
        <Text category='c2'>{votes}</Text>
    </View>
);

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 2,
    },
    icon: {
        width: 12,
        height: 12,
    },
});

export default PostVotes;
