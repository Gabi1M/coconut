import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Dimensions } from '@coconut/branding';
import { Listing } from '@coconut/models';

interface Props {
    listing: Listing;
}

const PostThumbnail = ({ listing }: Props) => {
    const uri = listing.data.preview?.images.length
        ? listing.data.preview.images[0].resolutions[
              listing.data.preview.images[0].resolutions.length - 1
          ].url
        : undefined;
    if (!uri) {
        return null;
    }

    return <Image style={styles.image} resizeMode='contain' source={{ uri }} />;
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        borderRadius: Dimensions.borderRadius,
        backgroundColor: 'black',
    },
});

export default PostThumbnail;
