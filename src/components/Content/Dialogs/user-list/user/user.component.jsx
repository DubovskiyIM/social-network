import React from 'react';
import { NavLink } from 'react-router-dom';

import { Badge, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const User = ({ id, name, count }) => {
	return (
		<NavLink to={`/dialogs/${id}`}>
			<div style={{ margin: 20 }}>
				<Badge count={count}>
					<Avatar shape='square' icon={<UserOutlined />} />
				</Badge>
				<span style={{ paddingLeft: 20 }}>{name}</span>
			</div>
		</NavLink>
	);
};

export default User;
