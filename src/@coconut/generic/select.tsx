import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

interface Props<T extends unknown> {
    data: T[];
    value: T;
    onChange: (value: T) => void;
    labelExtractor: (value: T) => string;
}

const Select = <T extends unknown>({ data, value, labelExtractor, onChange }: Props<T>) => {
    const styles = useStyles();

    return (
        <View style={styles.root}>
            <Picker style={styles.picker} selectedValue={value} onValueChange={onChange}>
                {data.map((item, index) => (
                    <Picker.Item key={index} label={labelExtractor(item)} value={item} />
                ))}
            </Picker>
        </View>
    );
};

const useStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        root: {
            marginVertical: Dimensions.ternarySpacing,
            backgroundColor: theme['color-basic-1100'],
            borderRadius: Dimensions.borderRadius,
        },
        picker: {
            color: theme['color-primary-100'],
        },
    });
};

export default Select;
