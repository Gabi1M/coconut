import { Resource, createResourceReducer } from '@coconut/resource';

const { reducer, actions } = createResourceReducer(Resource.ACCESS_TOKEN);
export { reducer as accessTokenReducer, actions as AccessTokenActions };
