import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { Profile } from '@coconut/models';
import { Resource, useSelectResourceFetchData } from '@coconut/resource';

const KarmaBadge = () => {
    const styles = useStyles();
    const profile = useSelectResourceFetchData(Resource.PROFILE) as Profile | undefined;

    if (!profile) {
        return null;
    }

    return (
        <View style={styles.root}>
            <Text category='h6'>Karma</Text>
            <View style={styles.container}>
                <Text style={styles.karmaValue} category='s1'>
                    {profile.comment_karma}
                </Text>
                <Text category='c2'>Comment</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.karmaValue} category='s1'>
                    {profile.total_karma}
                </Text>
                <Text category='c2'>Total</Text>
            </View>
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
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        container: {
            backgroundColor: theme['color-basic-1000'],
            borderRadius: Dimensions.borderRadius,
            padding: Dimensions.ternarySpacing,
            width: '30%',
            alignItems: 'center',
        },
        karmaValue: {
            color: theme['color-success-400'],
        },
    });
};

export default KarmaBadge;
