import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';

import { Avatar, Text } from '@ui-kitten/components';

import { selectProfile } from '@reddit/profile';

const ProfileBadge = () => {
    const profile = useSelector(selectProfile);

    if (!profile) {
        return null;
    }

    return (
        <View>
            <View
                style={StyleSheet.compose(styles.card as StyleProp<ViewStyle>, styles.spaceBetween)}
            >
                <Text category='h4'>{profile.name}</Text>
                <Avatar shape='round' size='giant' source={{ uri: profile.icon_img }} />
            </View>
            <View
                style={StyleSheet.compose(styles.card as StyleProp<ViewStyle>, styles.spaceArround)}
            >
                <View style={styles.karmaContainer}>
                    <Text category='c2'>Comment karma</Text>
                    <Text category='c2'>{profile.comment_karma}</Text>
                </View>
                <View style={styles.karmaContainer}>
                    <Text category='c2'>Total karma</Text>
                    <Text category='c2'>{profile.total_karma}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#3366A2',
        borderRadius: 10,
        marginVertical: 10,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    spaceArround: {
        justifyContent: 'space-around',
    },
    karmaContainer: {
        alignItems: 'center',
    },
});

export default ProfileBadge;
