import types from './profile.types';

export const addPostActionCreator = () => {
	return {
		type: types.ADD_POST,
	};
};

export const changeInputTextActionCreator = (newText) => {
	return {
		type: types.CHANGE_INPUT_TEXT,
		newText,
	};
};
