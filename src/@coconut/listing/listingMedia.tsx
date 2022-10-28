import React from 'react';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';

import { Dimensions } from '@coconut/branding';
import { Listing } from '@coconut/models';

interface Props {
    listing: Listing;
}

const ListingMedia = ({ listing }: Props) => {
    const styles = useStyles();
    const uri = listing.data.preview?.images.length
        ? listing.data.preview.images[0].resolutions[
              listing.data.preview.images[0].resolutions.length - 1
          ].url
        : undefined;
    if (!uri) {
        return null;
    }

    return <Image style={styles.image} source={{ uri }} />;
};

const useStyles = () => {
    const { height } = useWindowDimensions();
    return StyleSheet.create({
        image: {
            height: (30 * height) / 100,
            borderRadius: Dimensions.borderRadius,
        },
    });
};

export default ListingMedia;
