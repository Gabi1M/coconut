import { Resource, createResourceReducer } from '@reddit/resource';

const { reducer, actions } = createResourceReducer(Resource.PROFILE);
export { reducer as profileReducer, actions as ProfileActions };
