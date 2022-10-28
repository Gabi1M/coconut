import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Layout, Spinner, useTheme } from '@ui-kitten/components';

const LoadingSpinner = () => {
    const styles = useStyles();
    return (
        <Layout style={styles.root}>
            <View style={styles.spinnerContainer}>
                <Spinner />
            </View>
        </Layout>
    );
};

const useStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        root: {
            flex: 1,
            backgroundColor: theme['color-basic-1100'],
        },
        spinnerContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};

export default LoadingSpinner;
