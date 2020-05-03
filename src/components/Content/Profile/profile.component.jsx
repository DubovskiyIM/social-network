import React from 'react';

import ProfileInfo from './profile-info/profile-info.component';

import { Layout } from 'antd';
import ProfilePostsContainer from './profile-posts/profile-posts.container';

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
				<ProfilePostsContainer />
			</div>
		</Content>
	);
};

export default ProfileComponent;
