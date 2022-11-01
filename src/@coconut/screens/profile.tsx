import React from 'react';

import { SafeAreaScreen } from '@coconut/generic';
import { KarmaBadge, ProfileBadge } from '@coconut/profile';

const ProfileScreen = () => (
    <SafeAreaScreen>
        <ProfileBadge />
        <KarmaBadge />
    </SafeAreaScreen>
);

export default ProfileScreen;
