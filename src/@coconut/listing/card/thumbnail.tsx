import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Dimensions } from '@coconut/branding';
import { BuiltInThumbnails, BuiltInThumbnailsUriMapping } from '@coconut/models';

interface Props {
    thumbnail: string | undefined;
    onPress?: () => void;
}

const PostThumbnail = ({ thumbnail, onPress }: Props) => {
    if (!thumbnail) {
        return null;
    }

    let uri = thumbnail;
    if (
        [BuiltInThumbnails.DEFAULT, BuiltInThumbnails.SELF, BuiltInThumbnails.NSFW].includes(
            thumbnail as BuiltInThumbnails,
        )
    ) {
        uri = BuiltInThumbnailsUriMapping[thumbnail as BuiltInThumbnails];
    }

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.image} resizeMode='contain' source={{ uri }} />
            </TouchableOpacity>
        );
    }

    return <Image style={styles.image} resizeMode='contain' source={{ uri }} />;
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        borderRadius: Dimensions.borderRadius,
        backgroundColor: 'black',
    },
    defaultImage: {
        height: 200,
        borderRadius: Dimensions.borderRadius,
    },
});

export default PostThumbnail;
