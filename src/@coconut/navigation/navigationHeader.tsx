import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { Icon, Text, useTheme } from '@ui-kitten/components';

const NavigationHeader = ({ navigation }: NativeStackHeaderProps) => {
    const styles = useStyles();
    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableOpacity style={styles.root} onPress={navigation.goBack}>
                <Icon style={styles.icon} fill='white' name='arrow-ios-back-outline' />
                <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const useStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        safeArea: {
            backgroundColor: theme['color-basic-1100'],
        },
        root: {
            flexDirection: 'row',
            alignItems: 'center',
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
