import React, { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Icon, Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

import { useNavigation } from './hooks';

interface Props extends PropsWithChildren {
    accessoryRight?: JSX.Element;
}

const NavigationHeader = ({ children, accessoryRight }: Props) => {
    const styles = useStyles();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableOpacity style={styles.leftSection} onPress={navigation.goBack}>
                <Icon style={styles.icon} fill='white' name='arrow-ios-back-outline' />
                <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
            <View>{children}</View>
            <View style={styles.rightSection}>{accessoryRight}</View>
        </SafeAreaView>
    );
};

const useStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        safeArea: {
            backgroundColor: theme['color-basic-1100'],
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: Dimensions.ternarySpacing / 2,
        },
        leftSection: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 1,
            marginRight: 'auto',
        },
        centerSection: {
            flex: 1,
        },
        rightSection: {
            flex: 1,
            marginLeft: 'auto',
            justifyContent: 'flex-end',
        },
        icon: {
            width: 32,
            height: 32,
        },
        text: {
            fontSize: 20,
        },
    });
};

export default NavigationHeader;
