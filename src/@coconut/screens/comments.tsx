import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { Layout, Spinner } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { CommentItem } from '@coconut/comments';
import { PostThumbnail, PostTitle } from '@coconut/feed';
import { Comment, Comments, Listing } from '@coconut/models';
import {
    Resource,
    useSelectResourceFetchData,
    useSelectResourceFetchInLoadingState,
} from '@coconut/resource';

const renderItem: ListRenderItem<Comment> = ({ item }) => <CommentItem comment={item} />;
const keyExtractor = (item: Comment) => item.data.name;

const CommentsScreen = () => {
    const comments = useSelectResourceFetchData(Resource.COMMENTS) as Comments | undefined;
    const isLoading = useSelectResourceFetchInLoadingState(Resource.COMMENTS);

    if (!comments && isLoading) {
        return (
            <Layout style={styles.root}>
                <View style={styles.spinnerContainer}>
                    <Spinner />
                </View>
            </Layout>
        );
    }

    return (
        <Layout style={styles.root}>
            <PostThumbnail listing={comments?.[0].data.children[0] as Listing} />
            <PostTitle category='h5' title={comments?.[0].data.children[0].data.title as string} />
            <FlashList
                renderItem={renderItem}
                estimatedItemSize={100}
                data={comments?.[1].data.children}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: Dimensions.ternarySpacing,
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CommentsScreen;
