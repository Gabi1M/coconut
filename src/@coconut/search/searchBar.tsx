import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Icon, Input } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { PopupMenu } from '@coconut/generic';
import { SearchItemType, SearchItemTypeLabel } from '@coconut/models';

import SearchTypeChip from './typeChip';
import useSearch from './useSearch';

const availableTypes = [SearchItemType.SUBREDDIT, SearchItemType.LINK, SearchItemType.USER];
const labelExtractor = (item: SearchItemType) => SearchItemTypeLabel[item];

const SearchBar = () => {
    const styles = useStyles();
    const { query, types, onSearch, setQuery, addType, removeType } = useSearch();

    return (
        <View style={styles.root}>
            <Input
                value={query}
                onChangeText={setQuery}
                style={styles.input}
                placeholder='Search posts, subreddits, users etc...'
                accessoryRight={(props) => (
                    <View style={styles.inputAccessories}>
                        <PopupMenu
                            data={availableTypes}
                            labelExtractor={labelExtractor}
                            onChange={addType}
                        >
                            <Icon
                                {...props}
                                style={styles.icon}
                                name='funnel-outline'
                                fill='white'
                            />
                        </PopupMenu>
                        <TouchableOpacity onPress={onSearch}>
                            <Icon
                                {...props}
                                style={styles.icon}
                                name='search-outline'
                                fill='white'
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
            <View style={styles.chipContainer}>
                {types.map((type, index) => (
                    <SearchTypeChip key={index} type={type} onRemove={removeType} />
                ))}
            </View>
        </View>
    );
};

const useStyles = () =>
    StyleSheet.create({
        root: {
            marginVertical: Dimensions.ternarySpacing,
        },
        input: {
            borderRadius: Dimensions.borderRadius,
            marginVertical: Dimensions.ternarySpacing,
        },
        icon: {
            width: 24,
            height: 24,
        },
        inputAccessories: {
            flexDirection: 'row',
        },
        chipContainer: {
            flexDirection: 'row',
        },
    });

export default SearchBar;
