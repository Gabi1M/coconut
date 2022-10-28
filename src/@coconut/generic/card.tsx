import React, { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

interface Props extends PropsWithChildren {
    onPress?: () => void;
}

const Card = ({ children, onPress }: Props) => {
    const styles = useStyles();

    return (
        <TouchableOpacity style={styles.root} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
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
