import React from 'react';
import { StyleSheet } from 'react-native';

import { Layout } from '@ui-kitten/components';

import { ProfileBadge } from '@reddit/generic';

const ProfileScreen = () => (
    <Layout style={styles.root}>
        <ProfileBadge />
    </Layout>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 10,
    },
});

export default ProfileScreen;
