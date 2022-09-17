import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';

interface Props<T extends unknown> {
    data: T[];
    value: T;
    onChange: (value: T) => void;
    labelExtractor: (value: T) => string;
}

const Select = <T extends unknown>({ data, value, labelExtractor, onChange }: Props<T>) => (
    <View style={styles.root}>
        <Picker style={styles.picker} selectedValue={value} onValueChange={onChange}>
            {data.map((item, index) => (
                <Picker.Item key={index} label={labelExtractor(item)} value={item} />
            ))}
        </Picker>
    </View>
);

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

export default Select;
