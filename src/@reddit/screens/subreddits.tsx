import React from 'react';
import { StyleSheet } from 'react-native';

import { Layout, Text } from '@ui-kitten/components';

const SubredditsScreen = () => (
    <Layout style={styles.root}>
        <Text category='h1'>SUBREDDITS</Text>
    </Layout>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 10,
    },
});

export default SubredditsScreen;
