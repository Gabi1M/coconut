import React from 'react';

import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { StackNavigator } from '@reddit/navigation';

const App = () => (
    <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.dark}>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </ApplicationProvider>
    </>
);

export default App;
