import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@ui-kitten/components';

interface Props<T extends unknown> extends PropsWithChildren {
    data: T[];
    onChange: (value: T) => void;
    labelExtractor: (value: T) => string;
}

const PopupMenu = <T extends unknown>({ data, onChange, labelExtractor, children }: Props<T>) => {
    const styles = useStyles();

    const menuOptionStyles = {
        optionText: styles.menuOptionText,
        optionWrapper: styles.menuOptionContainer,
    };

    return (
        <Menu renderer={renderers.SlideInMenu}>
            <MenuTrigger>{children}</MenuTrigger>
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
    const insets = useSafeAreaInsets();
    return StyleSheet.create({
        options: {
            backgroundColor: theme['color-basic-900'],
            paddingBottom: insets.bottom,
            borderRadius: 10,
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
