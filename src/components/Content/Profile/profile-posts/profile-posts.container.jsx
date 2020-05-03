import ProfilePosts from './profile-posts.component';

import {
	addPostActionCreator,
	changeInputTextActionCreator,
} from '../../../../redux/profile/profile.actions';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		value: state.profilePage.newPostText,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeText: (newText) => dispatch(changeInputTextActionCreator(newText)),
		addPost: () => dispatch(addPostActionCreator()),
	};
};

const ProfilePostsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfilePosts);

export default ProfilePostsContainer;
