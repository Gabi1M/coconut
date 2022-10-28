import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { Layout } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

const Screen = ({ children }: PropsWithChildren) => <Layout style={styles.root}>{children}</Layout>;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: Dimensions.ternarySpacing,
    },
});

export default Screen;
