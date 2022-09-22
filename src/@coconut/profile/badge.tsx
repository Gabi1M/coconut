import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Avatar, Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

import { selectProfile } from './state';

const ProfileBadge = () => {
    const styles = useStyles();
    const profile = useSelector(selectProfile);

    if (!profile) {
        return null;
    }

    return (
        <View style={styles.root}>
            <Text category='h6'>{profile.name}</Text>
            <Avatar
                style={styles.avatar}
                shape='round'
                size='giant'
                source={{ uri: profile.icon_img }}
            />
        </View>
    );
};

const useStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        root: {
            backgroundColor: theme['color-basic-1100'],
            borderRadius: Dimensions.borderRadius,
            padding: Dimensions.ternarySpacing,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: Dimensions.ternarySpacing,
        },
        avatar: {
            backgroundColor: theme['color-basic-1000'],
        },
    });
};

export default ProfileBadge;
