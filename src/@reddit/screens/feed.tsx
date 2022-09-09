import React, { useEffect } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { IndexPath, Layout, Select, SelectItem, Text, ViewPager } from '@ui-kitten/components';

import { ListingCard, selectListings } from '@reddit/listings';
import { Listing } from '@reddit/models';
import { Resource, useFetchResource } from '@reddit/resource';

const FeedScreen = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    return (
        <ViewPager selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
            <SubredditsPage />
            <FeedPage />
        </ViewPager>
    );
};

const SubredditsPage = () => (
    <Layout style={styles.root} level='2'>
        <Text category='h1'>SUBREDDITS</Text>
    </Layout>
);

const renderItem: ListRenderItem<Listing> = ({ item }) => <ListingCard listing={item} />;
const keyExtractor = (item: Listing) => item.data.id;

const selectItems = ['hot', 'best', 'new', 'rising'];

const FeedPage = () => {
    const listings = useSelector(selectListings);
    const fetchListings = useFetchResource(Resource.LISTINGS);

    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const selectedType = selectItems[selectedIndex.row] as 'hot' | 'best' | 'new' | 'rising';

    useEffect(() => {
        fetchListings({ type: selectedType });
    }, [selectedType, fetchListings]);

    if (!listings) {
        return (
            <Layout style={styles.root} level='2'>
                <Text>FEED</Text>
            </Layout>
        );
    }

    return (
        <Layout style={styles.root} level='2'>
            <View style={styles.select}>
                <Select
                    value={selectedType}
                    selectedIndex={selectedIndex}
                    onSelect={(index) => setSelectedIndex(index as IndexPath)}
                >
                    {selectItems.map((item, index) => (
                        <SelectItem key={index} title={item} />
                    ))}
                </Select>
            </View>
            <FlatList
                data={listings.data.children}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    root: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222B45',
        padding: 5,
    },
    select: {
        width: '100%',
        marginBottom: 5,
    },
});

export default FeedScreen;
