export type RedditLinks = {
    campaign: string;
    launch: string;
    media?: string;
    recovery?: string;
};

export type FlickrLinks = {
    small: string[];
    original: string[];
}

export type LaunchLinks = {
    patch: {
        small?: string;
        large?: string;
    };
    reddit: RedditLinks;
    flickr: FlickrLinks;
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
}

export type Core = {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: boolean;
    landing_type: string;
    landpad: string;
}

export type Launch = {
    id: string;
    fairings?: string;
    links: LaunchLinks;
    static_fire_date_utc?: string;
    static_fire_date_unix?: string;
    tdb: boolean;
    net: boolean;
    window: number;
    rocket: string;
    success: boolean;
    failures: string[];
    details: string;
    crew: string[];
    ships: string[];
    capsules: string[];
    payloads: string[];
    launchpad: string;
    auto_update: boolean;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: Core[];
}
