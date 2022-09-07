import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon, Layout, Text } from '@ui-kitten/components';
import { useNavigateToLogin } from '@reddit/navigation';

const SettingsScreen = () => {
    const navigateToLogin = useNavigateToLogin();
    return (
        <Layout style={styles.root}>
            <Text category='h2'>Settings</Text>
            <ListItem
                name='Logout'
                description='Logout of your account'
                icon='person'
                onPress={navigateToLogin}
            />
        </Layout>
    );
};

interface ItemProps {
    name: string;
    description: string;
    icon: string;
    onPress: () => void;
}

const ListItem = ({ name, description, icon, onPress }: ItemProps) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <View style={styles.container}>
            <Icon style={styles.icon} fill='white' name={icon} />
            <View>
                <Text category='p1'>{name}</Text>
                <Text style={styles.description} category='p2'>
                    {description}
                </Text>
            </View>
        </View>
        <Icon style={styles.chevron} fill='white' name='chevron-right-outline' />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 10,
    },
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

export default SettingsScreen;
