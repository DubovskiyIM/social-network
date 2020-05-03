import React from 'react';

import Post from './post/post.component';
import NewPost from './new-post/new-post.component';

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
		<>
			<NewPost changeText={props.changeText} addPost={props.addPost} value={props.value}/>
			{postsElements}
		</>
	);
};

export default ProfilePosts;
