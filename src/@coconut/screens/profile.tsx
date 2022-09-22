import React from 'react';
import { StyleSheet } from 'react-native';

import { Layout } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { KarmaBadge, ProfileBadge } from '@coconut/profile';

const ProfileScreen = () => (
    <Layout style={styles.root}>
        <ProfileBadge />
        <KarmaBadge />
    </Layout>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: Dimensions.ternarySpacing,
    },
});

export default ProfileScreen;
