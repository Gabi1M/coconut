import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Listing } from '@reddit/models';

interface Props {
    listing: Listing;
}

const PostThumbnail = ({ listing }: Props) => {
    const uri = listing.data.preview?.images.length
        ? listing.data.preview.images[0].source.url
        : undefined;
    if (!uri) {
        return null;
    }

    return <Image style={styles.image} source={{ uri }} />;
};

const styles = StyleSheet.create({
    image: {
        height: 200,
    },
});

export default PostThumbnail;
