import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { RenderHTML } from 'react-native-render-html';

import { Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { Card } from '@coconut/generic';
import { Comment } from '@coconut/models';

interface Props {
    comment: Comment;
}

const CommentItem = ({ comment }: Props) => {
    const { htmlStyles, styles } = useStyles();
    const { width } = useWindowDimensions();

    return (
        <Card>
            <Text style={styles.title}>{comment.data.author}</Text>
            <View>
                {comment.data.body_html ? (
                    <RenderHTML
                        tagsStyles={htmlStyles.tagsStyles}
                        contentWidth={width - Dimensions.secondarySpacing}
                        source={{ html: comment.data.body_html }}
                    />
                ) : null}
            </View>
        </Card>
    );
};

const useStyles = () => {
    const theme = useTheme();

    const htmlStyles = {
        tagsStyles: {
            body: {
                color: theme['color-basic-100'],
            },
        },
    };

    const styles = StyleSheet.create({
        title: {
            color: theme['color-info-400'],
            marginBottom: Dimensions.ternarySpacing,
        },
    });

    return {
        htmlStyles,
        styles,
    };
};

export default CommentItem;
