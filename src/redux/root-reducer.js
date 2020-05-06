import { combineReducers } from 'redux'

import profileReducer from './profile/profile.reducer';
import dialogsReducer from './dialogs/dialogs.reducer';
import friendsReducer from './friends/friends.reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
})

export default rootReducer;