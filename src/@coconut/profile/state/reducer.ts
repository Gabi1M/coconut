import { Resource, createResourceReducer } from '@coconut/resource';

const { reducer, actions } = createResourceReducer(Resource.PROFILE);
export { reducer as profileReducer, actions as ProfileActions };
