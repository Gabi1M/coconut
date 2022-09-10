import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { PostSorting } from '@reddit/models';
import { Resource, useFetchResource } from '@reddit/resource';

const options = Object.values(PostSorting).filter((item) => isNaN(Number(item)));

const PostSortingSelector = () => {
    const fetchListings = useFetchResource(Resource.FEED);
    const [selectedSorting, setSelectedSorting] = React.useState(options[0]);

    const onChange = (sortingOption: PostSorting) => {
        setSelectedSorting(sortingOption);
        fetchListings({ type: sortingOption });
    };

    return (
        <View style={styles.root}>
            <Picker style={styles.picker} selectedValue={selectedSorting} onValueChange={onChange}>
                {options.map((item, index) => (
                    <Picker.Item key={index} label={item.toUpperCase()} value={item} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        marginVertical: 5,
        backgroundColor: '#1F2428',
        borderRadius: 10,
    },
    picker: {
        color: 'white',
    },
});

export default PostSortingSelector;
