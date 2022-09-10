import { Resource, createResourceReducer } from '@reddit/resource';

const { reducer, actions } = createResourceReducer(Resource.FEED);
export { reducer as feedReducer, actions as FeedActions };
