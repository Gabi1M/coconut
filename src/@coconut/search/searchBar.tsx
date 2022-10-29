import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Icon, Input, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { Resource, createResourceFetchAction } from '@coconut/resource';

const SearchBar = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    const [query, setQuery] = React.useState<string>();

    const onSearch = () => {
        if (query) {
            dispatch(
                createResourceFetchAction(Resource.SEARCH, {
                    query,
                }),
            );
        }
    };

    return (
        <View style={styles.root}>
            <Input
                value={query}
                onChangeText={setQuery}
                style={styles.input}
                placeholder='Search posts, subreddits, users etc...'
                accessoryRight={(props) => (
                    <TouchableOpacity onPress={onSearch}>
                        <Icon {...props} style={styles.icon} name='search-outline' fill='white' />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const useStyles = () =>
    StyleSheet.create({
        root: {
            marginVertical: Dimensions.ternarySpacing,
            flexDirection: 'row',
            alignItems: 'center',
        },
        input: {
            borderRadius: Dimensions.borderRadius,
            flex: 1,
        },
        icon: {
            width: 24,
            height: 24,
        },
    });

export default SearchBar;
