import types from './dialogs.types';

export const addMessageActionCreator = () => {
	return {
		type: types.ADD_MESSAGE,
	};
};

export const changeInputMessageActionCreator = (newMessageText) => {
	return {
		type: types.CHANGE_MESSAGE_TEXT,
		newMessageText,
	};
};
