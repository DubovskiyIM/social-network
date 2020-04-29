import React from 'react';
import { NavLink } from 'react-router-dom';

import { Badge, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const User = (props) => {
	return (
		<NavLink to={`/dialogs/${props.id}`}>
			<div style={{ margin: 20 }}>
				<Badge count={props.count}>
					<Avatar shape='square' icon={<UserOutlined />} />
				</Badge>
				<span style={{ paddingLeft: 20 }}>{props.name}</span>
			</div>
		</NavLink>
	);
};

export default User;
