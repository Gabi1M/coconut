import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Icon, Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';

interface Props {
    title: string;
    description?: string;
    icon?: string;
    onPress: () => void;
}

const ListItem = ({ title, description, icon, onPress }: Props) => {
    const { styles, theme } = useStyles();

    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <View style={styles.container}>
                {icon ? (
                    <Icon style={styles.icon} fill={theme['color-basic-100']} name={icon} />
                ) : null}
                <View>
                    <Text style={styles.text} category='p1'>
                        {title}
                    </Text>
                    {description ? (
                        <Text style={styles.text} category='p2'>
                            {description}
                        </Text>
                    ) : null}
                </View>
            </View>
            <Icon
                style={styles.chevron}
                fill={theme['color-basic-100']}
                name='chevron-right-outline'
            />
        </TouchableOpacity>
    );
};

const useStyles = () => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        item: {
            marginVertical: Dimensions.ternarySpacing,
            padding: Dimensions.ternarySpacing,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme['color-basic-1100'],
            borderRadius: Dimensions.borderRadius,
        },
        container: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        text: {
            color: theme['color-basic-100'],
        },
        icon: {
            width: Dimensions.iconLarge,
            height: Dimensions.iconLarge,
        },
        chevron: {
            width: Dimensions.iconSmall,
            height: Dimensions.iconSmall,
        },
    });

    return { styles, theme };
};

export default ListItem;
