import { Listing } from './listing';

/* eslint-disable import/no-cycle */
import { Thing } from './thing';
import { ThingItemKind } from './types';

export interface Comment {
    kind: ThingItemKind;
    data: {
        subreddit_id: string;
        approved_at_utc?: any;
        author_is_blocked: boolean;
        comment_type?: any;
        awarders: any[];
        mod_reason_by?: any;
        banned_by?: any;
        author_flair_type: string;
        total_awards_received: number;
        subreddit: string;
        author_flair_template_id?: any;
        likes?: any;
        user_reports: any[];
        saved: boolean;
        id: string;
        banned_at_utc?: any;
        mod_reason_title?: any;
        gilded: number;
        archived: boolean;
        collapsed_reason_code?: any;
        no_follow: boolean;
        author: string;
        can_mod_post: boolean;
        created_utc: number;
        send_replies: boolean;
        parent_id: string;
        score: number;
        author_fullname: string;
        approved_by?: any;
        mod_note?: any;
        all_awardings: any[];
        collapsed: boolean;
        body: string;
        edited: boolean;
        top_awarded_type?: any;
        author_flair_css_class?: any;
        name: string;
        is_submitter: boolean;
        downs: number;
        author_flair_richtext: any[];
        author_patreon_flair: boolean;
        body_html: string;
        removal_reason?: any;
        collapsed_reason?: any;
        distinguished?: any;
        associated_award?: any;
        stickied: boolean;
        author_premium: boolean;
        can_gild: boolean;
        unrepliable_reason?: any;
        author_flair_text_color?: any;
        score_hidden: boolean;
        permalink: string;
        subreddit_type: string;
        locked: boolean;
        report_reasons?: any;
        created: number;
        author_flair_text?: any;
        treatment_tags: any[];
        link_id: string;
        subreddit_name_prefixed: string;
        controversiality: number;
        depth: number;
        author_flair_background_color?: any;
        collapsed_because_crowd_control?: any;
        mod_reports: any[];
        num_reports?: any;
        ups: number;
        replies: Thing<Comment>;
    };
}

export interface ListingFetchParams {
    subreddit: string;
    id: string;
}

export type ListingAndComments = {
    listing: Thing<Listing>;
    comments: Thing<Comment>;
};
