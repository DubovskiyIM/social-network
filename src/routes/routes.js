import Profile from '../components/Content/Profile/profile.component';
import Dialogs from '../components/Content/Dialogs/dialogs.container';
import Friends from '../components/Content/Friends/friends.container';

export const ROUTE_KEYS = {
	ROOT: '/',
	USER_DIALOGS: '/dialogs/',
	USER_FRIENDS: '/friends/',
};

export const ROUTES = {
	ROOT: {
		component: Profile,
		exact: true,
		key: ROUTE_KEYS.ROOT,
		path: ROUTE_KEYS.ROOT,
	},
	USER_DIALOGS: {
		component: Dialogs,
		key: ROUTE_KEYS.USER_DIALOGS,
		path: ROUTE_KEYS.USER_DIALOGS,
	},
	USER_FRIENDS: {
		component: Friends,
		key: ROUTE_KEYS.USER_FRIENDS,
		path: ROUTE_KEYS.USER_FRIENDS,
	},
};
