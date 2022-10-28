import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Layout, Spinner } from '@ui-kitten/components';

const LoadingSpinner = () => (
    <Layout style={styles.root}>
        <View style={styles.spinnerContainer}>
            <Spinner />
        </View>
    </Layout>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingSpinner;
