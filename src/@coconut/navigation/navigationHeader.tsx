import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { Icon, Text } from '@ui-kitten/components';

const NavigationHeader = ({ navigation }: NativeStackHeaderProps) => {
    const styles = useStyles();
    return (
        <TouchableOpacity style={styles.root} onPress={navigation.goBack}>
            <Icon style={styles.icon} fill='white' name='arrow-ios-back-outline' />
            <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
    );
};

const useStyles = () =>
    StyleSheet.create({
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

export default NavigationHeader;
