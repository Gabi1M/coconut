import React from 'react';

import { Gallery } from '@coconut/generic';
import { Listing, ListingMediaType, MediaEmbed, MediaVideo } from '@coconut/models';

import { PostThumbnail } from '../card';

import ListingMediaEmbed from './embed';
import ListingMediaGallery from './gallery';
import ListingMediaVideo from './video';

interface Props {
    listing: Listing;
}

const ListingMedia = ({ listing }: Props) => {
    if (listing.data.media_metadata && listing.data.gallery_data) {
        return (
            <ListingMediaGallery
                mediaMetadata={listing.data.media_metadata}
                galleryData={listing.data.gallery_data}
            />
        );
    }

    if (listing.data.preview?.enabled && listing.data.preview?.reddit_video_preview) {
        return <ListingMediaVideo video={listing.data.preview.reddit_video_preview} />;
    }

    if (listing.data.media && Object.keys(listing.data.media).length) {
        const [[type, media]] = Object.entries(listing.data.media);
        switch (type as ListingMediaType) {
            case ListingMediaType.REDDIT_VIDEO: {
                return <ListingMediaVideo video={media as MediaVideo} />;
            }
            case ListingMediaType.OEMBED: {
                return <ListingMediaEmbed embed={media as MediaEmbed} />;
            }
        }
    }

    if (listing.data.preview?.enabled && listing.data.preview.images.length) {
        const image = listing.data.preview.images[listing.data.preview.images.length - 1].source;
        return <Gallery images={[{ uri: image.url }]} />;
    }

    return <PostThumbnail thumbnail={listing.data.thumbnail} />;
};

export default ListingMedia;
