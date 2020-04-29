import React from 'react';

import NewPost from './new-post/new-post.component';
import Post from './post/post.component';

const ProfilePosts = (props) => {
	let postsElements = props.posts.map((post) => {
		return (
			<Post
				key={post.id}
				content={post.content}
				likesCounts={post.likesCounts}
			/>
		);
	});
	return (
		<div className='profile-info'>
			<NewPost
				newPostText={props.newPostText}
				dispatch={props.dispatch}
			/>
			{postsElements}
		</div>
	);
};

export default ProfilePosts;
