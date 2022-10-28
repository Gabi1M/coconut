import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { Layout, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

const Screen = ({ children }: PropsWithChildren) => {
    const styles = useStyles();
    return <Layout style={styles.root}>{children}</Layout>;
};

const useStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        root: {
            flex: 1,
            paddingHorizontal: Dimensions.ternarySpacing,
            backgroundColor: theme['color-basic-1100'],
        },
    });
};

export default Screen;
