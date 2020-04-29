import { combineReducers } from 'redux'

import profileReducer from './profile/profile.reducer';
import dialogsReducer from './dialogs/dialogs.reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

export default rootReducer;