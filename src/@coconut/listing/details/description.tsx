import React from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { RenderHTML } from 'react-native-render-html';

import { Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { Listing } from '@coconut/models';

interface Props {
    listing: Listing;
}

const ListingDescription = ({ listing }: Props) => {
    const { htmlStyles, styles, width } = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const hasDescription = listing.data.selftext && listing.data.selftext !== '';

    const onPress = () => setExpanded((prev) => !prev);

    if (!hasDescription) {
        return null;
    }

    return expanded || listing.data.selftext.length < 100 ? (
        <View>
            <ScrollView style={styles.scrollView}>
                <RenderHTML
                    tagsStyles={htmlStyles.tagsStyles}
                    contentWidth={width - Dimensions.secondarySpacing}
                    source={{ html: listing.data.selftext_html }}
                />
            </ScrollView>
            <Text onPress={onPress}>Show less</Text>
        </View>
    ) : (
        <Text style={styles.text} onPress={onPress} numberOfLines={2}>
            {listing.data.selftext}
        </Text>
    );
};

const useStyles = () => {
    const theme = useTheme();
    const { height, width } = useWindowDimensions();
    const htmlStyles = {
        tagsStyles: {
            body: {
                color: theme['color-basic-100'],
            },
        },
    };

    const styles = StyleSheet.create({
        scrollView: {
            maxHeight: height / 4,
            marginVertical: Dimensions.ternarySpacing,
        },
        text: {
            marginVertical: Dimensions.ternarySpacing,
        },
    });

    return {
        htmlStyles,
        styles,
        width,
    };
};

export default ListingDescription;
