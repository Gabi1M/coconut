import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Avatar, Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { Profile } from '@coconut/models';
import { Resource, useSelectResourceFetchData } from '@coconut/resource';

const ProfileBadge = () => {
    const styles = useStyles();
    const profile = useSelectResourceFetchData(Resource.PROFILE) as Profile | undefined;

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
            backgroundColor: theme['color-basic-800'],
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
