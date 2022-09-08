import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Icon, Text } from '@ui-kitten/components';

interface Props {
    title: string;
    description?: string;
    icon?: string;
    onPress: () => void;
}

const ListItem = ({ title, description, icon, onPress }: Props) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <View style={styles.container}>
            {icon ? <Icon style={styles.icon} fill='white' name={icon} /> : null}
            <View>
                <Text category='p1'>{title}</Text>
                {description ? (
                    <Text style={styles.description} category='p2'>
                        {description}
                    </Text>
                ) : null}
            </View>
        </View>
        <Icon style={styles.chevron} fill='white' name='chevron-right-outline' />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3366A2',
        borderRadius: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        color: 'aqua',
    },
    icon: {
        width: 50,
        height: 50,
    },
    chevron: {
        width: 32,
        height: 32,
    },
});

export default ListItem;
