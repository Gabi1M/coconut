import { Resource, createResourceReducer } from '@reddit/resource';

const { reducer, actions } = createResourceReducer(Resource.LISTINGS);
export { reducer as listingsReducer, actions as ListingsActions };
