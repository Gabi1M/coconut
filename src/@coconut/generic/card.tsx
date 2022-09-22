import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

const Card = ({ children }: PropsWithChildren) => {
    const styles = useStyles();

    return <View style={styles.root}>{children}</View>;
};

const useStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        root: {
            marginVertical: Dimensions.ternarySpacing,
            padding: Dimensions.ternarySpacing,
            borderRadius: Dimensions.borderRadius,
            backgroundColor: theme['color-basic-1100'],
        },
    });
};

export default Card;
