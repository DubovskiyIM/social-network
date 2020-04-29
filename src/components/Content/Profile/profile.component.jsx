import React from 'react';

import ProfileInfo from './profile-info/profile-info.component';
import ProfilePosts from './profile-posts/profile-posts.component';

import { Layout } from 'antd';

const { Content } = Layout;

const ProfileComponent = (props) => {
	return (
		<Content
			style={{
				margin: '24px 16px 0',
				overflow: 'initial',
				backgroundColor: '#fff',
			}}
		>
			<div
				className='site-layout-background'
				style={{
					padding: 24,
					textAlign: 'center',
				}}
			>
				<ProfileInfo />
				<ProfilePosts
					posts={props.profilePage.posts}
					newPostText={props.profilePage.newPostText}
					dispatch={props.dispatch}
				/>
			</div>
		</Content>
	);
};

export default ProfileComponent;
