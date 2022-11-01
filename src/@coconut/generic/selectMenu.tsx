import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@ui-kitten/components';

interface Props<T extends unknown> extends PropsWithChildren {
    data: T[];
    itemRenderer: (item: T) => JSX.Element;
    onSelect: (value: T) => void;
}

const SelectMenu = <T extends unknown>({ data, itemRenderer, onSelect, children }: Props<T>) => {
    const styles = useStyles();

    const menuTriggerStyles = {
        triggerWrapper: styles.menuTriggerContainer,
    };

    const menuOptionStyles = {
        optionText: styles.menuOptionText,
        optionWrapper: styles.menuOptionContainer,
    };

    return (
        <Menu renderer={renderers.SlideInMenu}>
            <MenuTrigger customStyles={menuTriggerStyles}>{children}</MenuTrigger>
            <MenuOptions optionsContainerStyle={styles.options}>
                {data.map((item, index) => (
                    <MenuOption
                        key={index}
                        customStyles={menuOptionStyles}
                        onSelect={() => onSelect(item)}
                    >
                        {itemRenderer(item)}
                    </MenuOption>
                ))}
            </MenuOptions>
        </Menu>
    );
};

const useStyles = () => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    return StyleSheet.create({
        options: {
            backgroundColor: theme['color-basic-900'],
            paddingBottom: insets.bottom,
            borderRadius: 10,
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

export default SelectMenu;
