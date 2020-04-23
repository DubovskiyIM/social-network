import React from 'react';

import { Skeleton, Input, Button, Typography } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

const ProfilePosts = () => {
	return (
		<div className='profile-info'>
			<Title level={2} style={{ float: 'left' }}>
				My Posts
			</Title>
			<TextArea rows={4} style={{ marginBottom: '20px' }} />
			<Button type='primary' style={{ marginBottom: '20px', float: 'right' }}>
				Send
			</Button>
			<Skeleton avatar size='large' paragraph={{ rows: 4 }} />
			<br />
			<Skeleton avatar paragraph={{ rows: 6 }} />
			<br />
			<Skeleton avatar paragraph={{ rows: 5 }} />
			<br />
			<Skeleton avatar paragraph={{ rows: 2 }} />
		</div>
	);
};

export default ProfilePosts;
