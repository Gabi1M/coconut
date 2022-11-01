import { Resource, createResourceReducer } from '@coconut/resource';

const { reducer, actions } = createResourceReducer(Resource.LISTING);
export { reducer as listingReducer, actions as ListingActions };
