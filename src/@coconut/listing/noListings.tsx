import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, Text } from '@ui-kitten/components';

const NoListings = () => (
    <View style={styles.root}>
        <Icon style={styles.icon} name='activity-outline' fill='white' />
        <Text category='h5'>Nothing to show</Text>
    </View>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 64,
        height: 64,
    },
});

export default NoListings;
