import {FC, SVGProps} from "react";

export enum ROUTER_URLS {
	HOME = '/',
	DISCOVER = '/discover',
	AWARDS = '/awards',
	CELEBRITIES = '/celebrities',
	RECENT = '/recent',
	TOP_RATED = '/top-rated',
	DOWNLOADED = '/downloaded',
	PLAYLISTS = '/playlists',
	WATCHLIST = '/watchlist',
	COMPLETED = '/completed',
	SETTINGS = '/settings',
	LOG_OUT = '/logout',

	MOVIES = '/movies',
	TV_SHOWS = '/tv-shows',
	ANIME = '/anime'
}

export interface IRoutesItem {
	title: string;
	url: ROUTER_URLS;
	icon: FC<SVGProps<SVGSVGElement>>;
	component: FC;
}

export interface IRoutes {
	label: string;
	items: IRoutesItem[];
}
