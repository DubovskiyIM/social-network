import React from 'react';

import ProfileInfo from './profile-info/profile-info.component';
import ProfilePosts from './profile-posts/profile-posts.component';

import { Layout } from 'antd';

const { Content } = Layout;

const ProfileComponent = () => {
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
				<ProfilePosts />
			</div>
		</Content>
	);
};

export default ProfileComponent;
