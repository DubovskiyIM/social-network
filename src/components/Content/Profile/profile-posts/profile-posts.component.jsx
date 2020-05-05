import React from 'react';

import Post from './post/post.component';
import NewPost from './new-post/new-post.component';

const ProfilePosts = ({ posts, value, changeText, addPost }) => {
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
			<NewPost changeText={changeText} addPost={addPost} value={value} />
			{postsElements}
		</>
	);
};

export default ProfilePosts;
