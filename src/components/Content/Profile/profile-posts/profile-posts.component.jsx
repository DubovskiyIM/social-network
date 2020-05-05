import React from 'react';

import Post from './post/post.component';
import NewPost from './new-post/new-post.component';

const ProfilePosts = ({ posts, ...otherNewPostProps }) => {
	let postsElements = posts.map((post) => {
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
			<NewPost {...otherNewPostProps} />
			{postsElements}
		</>
	);
};

export default ProfilePosts;
