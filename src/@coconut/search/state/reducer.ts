import { Resource, createResourceReducer } from '@coconut/resource';

const { reducer, actions } = createResourceReducer(Resource.SEARCH);
export { reducer as searchReducer, actions as SearchActions };
