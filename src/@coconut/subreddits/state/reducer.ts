import { Resource, createResourceReducer } from '@coconut/resource';

const { reducer, actions } = createResourceReducer(Resource.SUBREDDITS);
export { reducer as subredditsReducer, actions as SubredditsActions };
