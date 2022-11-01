import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, Text, useTheme } from '@ui-kitten/components';

interface Props {
    message?: string;
}

const NoContent = ({ message }: Props) => {
    const { styles, theme } = useStyles();
    return (
        <View style={styles.root}>
            <Icon style={styles.icon} name='activity-outline' fill={theme['text-hint-color']} />
            <Text style={styles.text} category='h5'>
                {message || 'Nothing to show'}
            </Text>
        </View>
    );
};

const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        root: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        icon: {
            width: 64,
            height: 64,
        },
        text: {
            textAlign: 'center',
            color: theme['text-hint-color'],
        },
    });

    return {
        styles,
        theme,
    };
};

export default NoContent;
