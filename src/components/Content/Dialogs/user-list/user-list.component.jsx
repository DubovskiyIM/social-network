import React from 'react';
import './user-list.styles.scss';

import User from './user/user.component';

const UserList = ({ users }) => {
	let usersElements = users.map(({ ...userProps }) => {
		return <User {...userProps} />;
	});

	return (
		<div
			style={{
				padding: 20,
			}}
		>
			{usersElements}
		</div>
	);
};

export default UserList;
