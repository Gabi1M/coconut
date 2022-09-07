import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from '@reddit/navigation';

const App = () => (
    <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    </ApplicationProvider>
);

export default App;
