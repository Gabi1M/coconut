import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, Text } from '@ui-kitten/components';

interface Props {
    ratio: number;
}

const PostVoteRatio = ({ ratio }: Props) => (
    <View style={styles.root}>
        <Icon style={styles.icon} fill='blue' name='activity-outline' />
        <Text category='c2'>{(ratio * 100).toFixed(0)}</Text>
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
        marginRight: 2,
    },
});

export default PostVoteRatio;
