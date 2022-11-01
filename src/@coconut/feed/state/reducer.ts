import { Resource, createResourceReducer } from '@coconut/resource';

const { reducer, actions } = createResourceReducer(Resource.FEED);
export { reducer as feedReducer, actions as FeedActions };
