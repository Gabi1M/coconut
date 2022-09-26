import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { StackNavigator, navigationRef } from '@coconut/navigation';
import { createStore } from '@coconut/state';

const App = () => {
    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Provider store={createStore()}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.dark}>
                <NavigationContainer ref={navigationRef}>
                    <StackNavigator />
                </NavigationContainer>
            </ApplicationProvider>
        </Provider>
    );
};

export default App;
