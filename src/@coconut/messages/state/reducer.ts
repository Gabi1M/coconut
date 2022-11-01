import { Resource, createResourceReducer } from '@coconut/resource';

const { reducer, actions } = createResourceReducer(Resource.MESSAGES);
export { reducer as messagesReducer, actions as MessagesActions };
