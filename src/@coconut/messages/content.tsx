import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { RenderHTML } from 'react-native-render-html';

import { useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

interface Props {
    html: string;
}

const MessageContent = ({ html }: Props) => {
    const { styles, htmlStyles } = useStyles();
    const { width } = useWindowDimensions();

    return (
        <View style={styles.htmlRender}>
            <RenderHTML
                tagsStyles={htmlStyles.tagsStyles}
                contentWidth={width - Dimensions.secondarySpacing}
                source={{ html }}
            />
        </View>
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
        htmlRender: {
            backgroundColor: theme['color-basic-1000'],
            borderRadius: Dimensions.borderRadius,
            padding: Dimensions.ternarySpacing,
        },
    });

    return { styles, htmlStyles };
};

export default MessageContent;
