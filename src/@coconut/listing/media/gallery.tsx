import React from 'react';
import { ImageURISource } from 'react-native';

import { Gallery } from '@coconut/generic';
import { GalleryData, MediaMetadata } from '@coconut/models';

interface Props {
    mediaMetadata: Record<string, MediaMetadata>;
    galleryData: GalleryData;
}

const ListingMediaGallery = ({ mediaMetadata, galleryData }: Props) => {
    const images: ImageURISource[] = React.useMemo(
        () =>
            galleryData.items.map((galleryItem) => {
                const media = mediaMetadata[galleryItem.media_id];
                return {
                    uri: media.s.u,
                };
            }),
        [mediaMetadata, galleryData],
    );

    return <Gallery images={images} />;
};

export default ListingMediaGallery;
