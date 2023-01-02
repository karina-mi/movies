import {
	Awards,
	Celebrities,
	Completed,
	Discover,
	Downloaded,
	Home,
	LogOut,
	Playlists,
	Recent,
	Settings,
	TopRated,
	TvShows,
	Watchlist
} from "@/screens";

import {ReactComponent as HomeIcon} from "@/assets/icons/home.svg";
import {ReactComponent as DiscoverIcon} from "@/assets/icons/discover.svg";
import {ReactComponent as AwardIcon} from "@/assets/icons/award.svg";
import {
	ReactComponent as CelebritiesIcon
} from "@/assets/icons/celebrities.svg";
import {ReactComponent as RecentIcon} from "@/assets/icons/recent.svg";
import {ReactComponent as TopRatedIcon} from "@/assets/icons/top-rated.svg";
import {ReactComponent as DownloadedIcon} from "@/assets/icons/downloaded.svg";
import {ReactComponent as PlaylistsIcon} from "@/assets/icons/playlists.svg";
import {ReactComponent as WatchlistIcon} from "@/assets/icons/watchlist.svg";
import {ReactComponent as CompletedIcon} from "@/assets/icons/completed.svg";
import {ReactComponent as SettingsIcon} from "@/assets/icons/settings.svg";
import {ReactComponent as LogOutIcon} from "@/assets/icons/log-out.svg";

import {IRoutes, IRoutesItem, ROUTER_URLS} from "@/routes/type";

const ROUTES: IRoutes[] = [
	{
		label: 'Menu',
		items: [
			{
				title: 'Home',
				url: ROUTER_URLS.HOME,
				icon: HomeIcon,
				component: Home
			},
			{
				title: 'Discover',
				url: ROUTER_URLS.DISCOVER,
				icon: DiscoverIcon,
				component: Discover
			},
			{
				title: 'Awards',
				url: ROUTER_URLS.AWARDS,
				icon: AwardIcon,
				component: Awards
			},
			{
				title: 'Celebrities',
				url: ROUTER_URLS.CELEBRITIES,
				icon: CelebritiesIcon,
				component: Celebrities
			}
		]
	},
	{
		label: 'Library',
		items: [
			{
				title: 'Recent',
				url: ROUTER_URLS.RECENT,
				icon: RecentIcon,
				component: Recent
			},
			{
				title: 'Top Rated',
				url: ROUTER_URLS.TOP_RATED,
				icon: TopRatedIcon,
				component: TopRated
			},
			{
				title: 'Downloaded',
				url: ROUTER_URLS.DOWNLOADED,
				icon: DownloadedIcon,
				component: Downloaded
			},
			{
				title: 'Playlists',
				url: ROUTER_URLS.PLAYLISTS,
				icon: PlaylistsIcon,
				component: Playlists
			},
			{
				title: 'Watchlist',
				url: ROUTER_URLS.WATCHLIST,
				icon: WatchlistIcon,
				component: Watchlist
			},
			{
				title: 'Completed',
				url: ROUTER_URLS.COMPLETED,
				icon: CompletedIcon,
				component: Completed
			}
		]
	},
	{
		label: 'General',
		items: [
			{
				title: 'Settings',
				url: ROUTER_URLS.SETTINGS,
				icon: SettingsIcon,
				component: Settings
			},
			{
				title: 'Log Out',
				url: ROUTER_URLS.LOG_OUT,
				icon: LogOutIcon,
				component: LogOut
			}
		]
	}
];

export const CATEGORIES: Omit<IRoutesItem, 'icon'>[] = [
	{
		title: 'Movies',
		url: ROUTER_URLS.HOME,
		component: TvShows
	},
	{
		title: 'TV Shows',
		url: ROUTER_URLS.TV_SHOWS,
		component: TvShows
	},
	{
		title: 'Anime',
		url: ROUTER_URLS.ANIME,
		component: TvShows
	}
]

export default ROUTES;
