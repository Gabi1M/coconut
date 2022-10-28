import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
});

export default Divider;
