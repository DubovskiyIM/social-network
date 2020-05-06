import types from './friends.types';

export const sendMessageAC = () => {
	return {
		type: types.SEND_MESSAGE,
	};
};

export const setUsersAC = (users) => {
	return {
		type: types.SET_USERS,
		users
	}
}
