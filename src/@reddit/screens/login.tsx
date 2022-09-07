import React from 'react';
import { Button, Input, Text } from '@ui-kitten/components';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Background } from '@reddit/images';
import { useNavigation } from '@react-navigation/native';
import { MainRoutes } from '@reddit/navigation';

const LoginScreen = () => {
    const navigation = useNavigation();

    const onLogin = () => null;

    const onRegister = () => navigation.navigate(MainRoutes.REGISTER as never);

    return (
        <ImageBackground style={styles.root} source={Background}>
            <Input style={styles.input} placeholder='Email' />
            <Input style={styles.input} placeholder='Password' secureTextEntry />
            <Button style={styles.button} onPress={onLogin}>
                Continue
            </Button>
            <TouchableOpacity onPress={onRegister}>
                <Text style={styles.register} category='c1'>
                    Create an account
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    input: {
        marginVertical: 5,
    },
    button: {
        marginVertical: 5,
        width: '100%',
    },
    register: {
        marginVertical: 5,
        color: 'aqua',
    },
});

export default LoginScreen;