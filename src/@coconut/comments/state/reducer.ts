import { Resource, createResourceReducer } from '@coconut/resource';

const { reducer, actions } = createResourceReducer(Resource.COMMENTS);
export { reducer as commentsReducer, actions as CommentsActions };
