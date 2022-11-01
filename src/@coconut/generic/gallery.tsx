import React from 'react';
import { Image, ImageURISource, StyleSheet, TouchableOpacity } from 'react-native';
import ImageView from 'react-native-image-viewing';

import { Dimensions } from '@coconut/branding';

interface Props {
    images: ImageURISource[];
}

const Gallery = ({ images }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const openGallery = () => setIsOpen(true);
    const closeGallery = () => setIsOpen(false);

    if (!images.length) {
        return null;
    }

    return (
        <TouchableOpacity onPress={openGallery}>
            <Image style={styles.image} source={images[0]} resizeMode='contain' />
            <ImageView
                images={images}
                imageIndex={0}
                visible={isOpen}
                onRequestClose={closeGallery}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        borderRadius: Dimensions.borderRadius,
        backgroundColor: 'black',
    },
});

export default Gallery;
