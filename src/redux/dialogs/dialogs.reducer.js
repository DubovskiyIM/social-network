import types from './dialogs.types';

const INITIAL_STATE = {
	users: [
		{ id: 1, name: 'Vasya Petechkin', count: 2 },
		{ id: 2, name: 'Petya Vasechkin', count: 5 },
		{ id: 3, name: 'Ivan Ivanov', count: 1 },
		{ id: 4, name: 'Boris Borisov', count: 1 },
		{ id: 5, name: 'Lev Lyvov', count: 0 },
	],
	messages: [
		{ id: 1, author: 'Vasya petechkin', content: 'This is first message' },
		{ id: 2, author: 'Vasya petechkin', content: 'This is second message' },
		{ id: 3, author: 'Vasya petechkin', content: 'This is third message' },
		{ id: 4, author: 'Vasya petechkin', content: 'This is fourth message' },
	],
	newMessageText: 'Enter message',
};

const dialogsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_MESSAGE:
			return {
				...state,
				newMessageText: '',
				messages: [
					...state.messages,
					{ id: 6, author: 'Vasya Petechkin', content: state.newMessageText },
				],
			};
		case types.CHANGE_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newMessageText,
			};
		default:
			return state;
	}
};

export default dialogsReducer;
