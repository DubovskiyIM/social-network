import Profile from '../components/Content/Profile/profile.component';
import Dialogs from '../components/Content/Dialogs/dialogs.container'

export const ROUTE_KEYS = {
  ROOT: "/",
  USER_DIALOGS: "/dialogs/",
};

export const ROUTES = {
  ROOT: {
      component: Profile,
      exact: true,
      key: ROUTE_KEYS.ROOT,
      path: ROUTE_KEYS.ROOT,
  },
  USER_USER_DIALOGS: {
      component: Dialogs,
      key: ROUTE_KEYS.USER_DIALOGS,
      path: ROUTE_KEYS.USER_DIALOGS,
  },
};