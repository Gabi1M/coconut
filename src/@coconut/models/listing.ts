import { ThingItemKind } from './types';

interface Source {
    url: string;
    width: number;
    height: number;
}

interface Resolution {
    url: string;
    width: number;
    height: number;
}

interface Image {
    source: Source;
    resolutions: Resolution[];
    id: string;
}

interface Preview {
    images: Image[];
    reddit_video_preview?: MediaVideo;
    enabled: boolean;
}

interface Photo {
    y: number;
    x: number;
    u: string;
}

export interface MediaMetadata {
    status: string;
    e: string;
    m: string;
    p: Photo[];
    s: Photo;
    id: string;
}

interface GalleryItem {
    media_id: string;
    id: string;
    caption?: string;
}

export interface GalleryData {
    items: GalleryItem[];
}

export interface MediaVideo {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

export interface MediaEmbed {
    provider_url: string;
    title: string;
    html: string;
    thumbnail_width: number;
    height: number;
    width: number;
    version: string;
    author_name: string;
    provider_name: string;
    thumbnail_url: string;
    type: string;
    thumbnail_height: string;
    author_url: string;
}

export enum ListingMediaType {
    OEMBED = 'oembed',
    REDDIT_VIDEO = 'reddit_video',
}

interface Data {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: any[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    thumbnail_height: number;
    top_awarded_type?: any;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color?: any;
    ups: number;
    total_awards_received: number;
    thumbnail_width: number;
    author_flair_template_id?: any;
    is_original_content: boolean;
    user_reports: any[];
    secure_media?: any;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    link_flair_text: string;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class?: any;
    author_flair_richtext: any[];
    post_hint: string;
    content_categories?: any;
    is_self: boolean;
    subreddit_type: string;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html?: any;
    likes?: any;
    suggested_sort: string;
    banned_at_utc?: any;
    url_overridden_by_dest: string;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview?: Preview;
    all_awardings: any[];
    awarders: any[];
    media_only: boolean;
    link_flair_template_id: string;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text?: any;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    mod_note?: any;
    distinguished?: any;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by?: any;
    num_reports?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color?: any;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media?: Record<string, MediaVideo | MediaEmbed>;
    is_video: boolean;
    media_metadata?: Record<string, MediaMetadata>;
    gallery_data?: GalleryData;
}

export interface Listing {
    kind: ThingItemKind;
    data: Data;
}

export enum ListingFilter {
    HOT = 'hot',
    BEST = 'best',
    NEW = 'new',
    RISING = 'rising',
}

export interface FeedFetchParams {
    type: ListingFilter;
    after?: string;
}

export enum BuiltInThumbnails {
    SELF = 'self',
    DEFAULT = 'default',
    NSFW = 'nsfw',
}

export const BuiltInThumbnailsUriMapping = {
    [BuiltInThumbnails.SELF]: 'https://www.reddit.com/static/self_default2.png',
    [BuiltInThumbnails.DEFAULT]: 'https://www.reddit.com/static/noimage.png',
    [BuiltInThumbnails.NSFW]: 'https://www.reddit.com/static/nsfw2.png',
};
