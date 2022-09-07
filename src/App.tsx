import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { HomeScreen } from '@reddit/screens';

const App = () => (
    <ApplicationProvider {...eva} theme={eva.dark}>
        <HomeScreen />
    </ApplicationProvider>
);

export default App;
