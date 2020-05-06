import types from './friends.types';

let INITIAL_STATE = {
	friends: [],
};

const friendsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SEND_MESSAGE:
			return {
				...state,
			};
		case types.SET_USERS:
			return {
				...state,
				friends: [...state.friends, ...action.users],
			};
		default:
			return state;
	}
};

export default friendsReducer;
