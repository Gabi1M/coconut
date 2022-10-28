import React from 'react';

import { Screen } from '@coconut/generic';
import { KarmaBadge, ProfileBadge } from '@coconut/profile';

const ProfileScreen = () => (
    <Screen>
        <ProfileBadge />
        <KarmaBadge />
    </Screen>
);

export default ProfileScreen;
