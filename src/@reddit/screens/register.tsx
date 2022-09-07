import React from 'react';
import { Button, Input } from '@ui-kitten/components';
import { ImageBackground, StyleSheet } from 'react-native';
import { Background } from '@reddit/images';
import { useNavigateToLogin } from '@reddit/navigation';

const RegisterScreen = () => {
    const navigateToLogin = useNavigateToLogin();

    return (
        <ImageBackground style={styles.root} source={Background}>
            <Input style={styles.input} placeholder='Email' />
            <Input style={styles.input} placeholder='Password' secureTextEntry />
            <Input style={styles.input} placeholder='Confirm password' secureTextEntry />
            <Button style={styles.button} onPress={navigateToLogin}>
                Create account
            </Button>
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
});

export default RegisterScreen;
