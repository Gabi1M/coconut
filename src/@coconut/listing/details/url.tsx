import React from 'react';
import { Linking, StyleSheet } from 'react-native';

import { Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

interface Props {
    url: string;
}

const ListingUrl = ({ url }: Props) => {
    const styles = useStyles();
    const onPress = () => Linking.openURL(url);
    return (
        <Text style={styles.text} numberOfLines={1} onPress={onPress}>
            {url}
        </Text>
    );
};

const useStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        text: {
            color: theme['color-info-600'],
            marginBottom: Dimensions.ternarySpacing,
        },
    });
};

export default ListingUrl;
