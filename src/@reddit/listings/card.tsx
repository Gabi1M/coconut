import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Icon, Text } from '@ui-kitten/components';

import { Listing } from '@reddit/models';

interface Props {
    listing: Listing;
}

const ListingCard = ({ listing }: Props) => {
    const canShowImage =
        listing.data?.preview?.enabled &&
        listing.data.preview.images[0].source.url.startsWith('http');
    return (
        <View style={styles.root}>
            <Text style={styles.title} numberOfLines={2}>
                {listing.data.title}
            </Text>
            {canShowImage ? (
                <Image
                    style={styles.thumbnail}
                    resizeMode='contain'
                    source={{ uri: listing.data.preview.images[0].source.url }}
                />
            ) : null}
            <View style={styles.bottomContainer}>
                <View style={styles.buttonsContainer}>
                    <View style={styles.iconContainer}>
                        <Icon style={styles.icon} fill='white' name='arrow-upward-outline' />
                        <Text category='c2'>{listing.data.ups}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon style={styles.icon} fill='white' name='arrow-downward-outline' />
                        <Text category='c2'>{listing.data.downs}</Text>
                    </View>
                </View>
                <Text category='c2'>{listing.data.subreddit_name_prefixed}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        marginVertical: 5,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#1F2428',
    },
    title: {
        marginBottom: 10,
    },
    bottomContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    thumbnail: {
        height: 200,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 2,
    },
    icon: {
        width: 12,
        height: 12,
    },
});

export default ListingCard;
