import React from 'react';
import { Layout } from 'antd';

import ProfileInfo from './profile-info/profile-info.component';
import ProfilePostsContainer from './profile-posts/profile-posts.container';

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
				<ProfilePostsContainer />
			</div>
		</Content>
	);
};

export default ProfileComponent;
