import { ThingItemKind } from './types';

export interface Message {
    kind: ThingItemKind;
    data: {
        first_message?: string;
        first_message_name?: string;
        subreddit?: string;
        likes?: number;
        replies?: string;
        author_fullname: string;
        id: string;
        subject: string;
        associated_awarding_id?: string;
        score: number;
        author: string;
        num_comments?: number;
        parent_id?: string;
        subreddit_name_prefixed?: string;
        new: boolean;
        type: string;
        body: string;
        dest: string;
        was_comment: string;
        body_html: string;
        name: string;
        created: Date;
        created_utc: Date;
        context?: string;
        distinguished?: string;
    };
}

export interface MessagesFetchParams {
    after?: string;
}
