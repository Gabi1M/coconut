import React from 'react';
import { StyleSheet } from 'react-native';

import { Layout, Text, ViewPager } from '@ui-kitten/components';

const FeedScreen = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    return (
        <ViewPager selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
            <Layout style={styles.root} level='2'>
                <Text category='h1'>SUBREDDITS</Text>
            </Layout>
            <Layout style={styles.root} level='2'>
                <Text category='h1'>FEED</Text>
            </Layout>
        </ViewPager>
    );
};

const styles = StyleSheet.create({
    root: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222B45',
    },
});

export default FeedScreen;
