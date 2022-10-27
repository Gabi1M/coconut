import React from 'react';
import { StyleSheet } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';

import { useTheme } from '@ui-kitten/components';

interface Props<T extends unknown> {
    data: T[];
    value: T;
    onChange: (value: T) => void;
    labelExtractor: (value: T) => string;
}

const PopupMenu = <T extends unknown>({ data, value, onChange, labelExtractor }: Props<T>) => {
    const styles = useStyles();

    const menuTriggerStyles = {
        triggerText: styles.menuTriggerText,
        triggerWrapper: styles.menuTriggerContainer,
    };

    const menuOptionStyles = {
        optionText: styles.menuOptionText,
        optionWrapper: styles.menuOptionContainer,
    };

    return (
        <Menu renderer={renderers.SlideInMenu}>
            <MenuTrigger customStyles={menuTriggerStyles} text={labelExtractor(value)} />
            <MenuOptions optionsContainerStyle={styles.options}>
                {data.map((item, index) => (
                    <MenuOption
                        key={index}
                        customStyles={menuOptionStyles}
                        text={labelExtractor(item)}
                        onSelect={() => onChange(item)}
                    />
                ))}
            </MenuOptions>
        </Menu>
    );
};

const useStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        options: {
            paddingBottom: 20,
            backgroundColor: theme['color-basic-700'],
            borderRadius: 10,
        },
        menuTriggerText: {
            color: theme['text-basic-color'],
            fontSize: 20,
        },
        menuTriggerContainer: {
            padding: 5,
        },
        menuOptionText: {
            color: theme['text-basic-color'],
        },
        menuOptionContainer: {
            padding: 10,
            alignItems: 'center',
        },
    });
};

export default PopupMenu;