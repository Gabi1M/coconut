import React from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { RenderHTML } from 'react-native-render-html';

import { useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { Listing } from '@coconut/models';

import ListingTitle from './listingTitle';

interface Props {
    listing: Listing;
}

const ListingContent = ({ listing }: Props) => {
    const { htmlStyles, styles } = useStyles();
    const { width } = useWindowDimensions();
    const hasDescription = listing.data.selftext && listing.data.selftext !== '';

    return (
        <View>
            <ListingTitle title={listing.data.title} />
            {hasDescription ? (
                <ScrollView style={styles.scrollView}>
                    <RenderHTML
                        tagsStyles={htmlStyles.tagsStyles}
                        contentWidth={width - Dimensions.secondarySpacing}
                        source={{ html: listing.data.selftext_html }}
                    />
                </ScrollView>
            ) : null}
        </View>
    );
};

const useStyles = () => {
    const theme = useTheme();
    const { height } = useWindowDimensions();
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
    });

    return {
        htmlStyles,
        styles,
    };
};

export default ListingContent;
