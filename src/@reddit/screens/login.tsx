import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { Button, Text } from '@ui-kitten/components';

import { Background } from '@reddit/images';
import { useNavigateToLoginWebview } from '@reddit/navigation';

const LoginScreen = () => {
    const navigateToLogin = useNavigateToLoginWebview();

    return (
        <ImageBackground style={styles.root} source={Background}>
            <Button style={styles.signInButton} onPress={navigateToLogin}>
                Sign in with Reddit
            </Button>
            <Text>or</Text>
            <Button style={styles.createAccountButton}>Create an account</Button>
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
    signInButton: {
        marginVertical: 5,
        width: '100%',
    },
    createAccountButton: {
        marginVertical: 5,
        width: '100%',
        backgroundColor: 'purple',
        borderColor: 'purple',
    },
});

export default LoginScreen;
