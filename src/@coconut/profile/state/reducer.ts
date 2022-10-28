import { BaseAction, Resource, createResourceReducer } from '@coconut/resource';

const { reducer, actions } = createResourceReducer(Resource.PROFILE);

const ProfileActions = {
    ...actions,
    LOGOUT: `${Resource.PROFILE.toUpperCase()}/LOGOUT`,
};

export type LogoutAction = BaseAction;

export const createLogoutAction = (): LogoutAction => ({
    type: ProfileActions.LOGOUT,
});

export { reducer as profileReducer, ProfileActions };
