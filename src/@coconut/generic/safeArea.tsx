import React, { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { useTheme } from '@ui-kitten/components';

const SafeArea = ({ children }: PropsWithChildren) => {
    const styles = useStyles();

    return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
};

const useStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        root: {
            flex: 1,
            backgroundColor: theme['color-basic-1100'],
        },
    });
};

export default SafeArea;
