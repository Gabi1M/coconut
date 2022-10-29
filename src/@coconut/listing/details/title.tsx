import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

interface Props {
    title: string;
}

const ListingTitle = ({ title }: Props) => {
    const [expanded, setExpanded] = React.useState(false);

    const toggleExpanded = () => setExpanded((prev) => !prev);

    return (
        <Text
            style={styles.text}
            category='h6'
            numberOfLines={expanded ? undefined : 2}
            onPress={toggleExpanded}
        >
            {title}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        marginVertical: Dimensions.ternarySpacing,
    },
});

export default ListingTitle;
