import React, { PropsWithChildren } from 'react';

import SafeArea from './safeArea';
import Screen from './screen';

const SafeAreaScreen = ({ children }: PropsWithChildren) => (
    <SafeArea>
        <Screen>{children}</Screen>
    </SafeArea>
);

export default SafeAreaScreen;
