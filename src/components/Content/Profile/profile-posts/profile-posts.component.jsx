import React from 'react';

import NewPost from './new-post/new-post.component';
import Post from './post/post.component';

const ProfilePosts = () => {
	return (
		<div className='profile-info'>
      <NewPost/>
			<Post content='This is first post on that wall!' likesCounts='4'/>
			<Post content='This is second post on that wall!' likesCounts='5' />
			<Post content='This is third post on that wall!' likesCounts='6' />
      <Post content='This is fourth post on that wall!' likesCounts='7' />
      <Post content='This is fifth post on that wall!' likesCounts='8' />
		</div>
	);
};

export default ProfilePosts;
