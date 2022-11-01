import { Resource, createResourceReducer } from '@coconut/resource';

const { reducer, actions } = createResourceReducer(Resource.SUBREDDIT);
export { reducer as subredditReducer, actions as SubredditActions };
