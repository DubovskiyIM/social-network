import types from './profile.types';

const INITIAL_STATE = {
	posts: [
		{ id: 1, content: 'This is first post on that wall!', likesCounts: 4 },
		{ id: 2, content: 'This is second post on that wall!', likesCounts: 5 },
		{ id: 3, content: 'This is third post on that wall!', likesCounts: 6 },
		{ id: 4, content: 'This is fourth post on that wall!', likesCounts: 7 },
		{ id: 5, content: 'This is fifth post on that wall!', likesCounts: 8 },
	],
	newPostText: 'New Text',
};

const profileReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_POST:
			let newPost = {
				id: 5,
				content: state.newPostText,
				likesCounts: 0,
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case types.CHANGE_INPUT_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
};

export default profileReducer;
