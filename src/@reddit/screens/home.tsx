import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
/* eslint-disable-next-line no-restricted-imports */
import { MainRoutes } from '@reddit/navigation/types';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>HOME</Text>
            <Button onPress={() => navigation.navigate(MainRoutes.LOGIN as never)}>
                Go to login
            </Button>
        </Layout>
    );
};

export default HomeScreen;
