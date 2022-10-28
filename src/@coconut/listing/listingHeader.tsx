import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Spinner, Text } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { ListingAndComments } from '@coconut/models';
import { Resource, useSelectResourceFetchData } from '@coconut/resource';

import ListingMedia from './listingMedia';

const ListingHeader = () => {
    const listingAndComments = useSelectResourceFetchData(Resource.LISTING) as
        | ListingAndComments
        | undefined;
    if (!listingAndComments || !listingAndComments.listing.data.children.length) {
        return <Spinner />;
    }

    const listing = listingAndComments.listing.data.children[0];
    return (
        <View>
            <ListingMedia listing={listing} />
            <Text style={styles.title} category='h4'>
                {listing.data.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginVertical: Dimensions.ternarySpacing,
    },
});

export default ListingHeader;
