import React from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

import { MediaVideo } from '@coconut/models';

interface Props {
    video: MediaVideo;
}

const ListingMediaVideo = ({ video }: Props) => (
    <Video
        style={styles.backgroundVideo}
        controls
        repeat
        resizeMode='contain'
        source={{ uri: video.fallback_url }}
    />
);

const styles = StyleSheet.create({
    backgroundVideo: {
        height: 300,
    },
});

export default ListingMediaVideo;
