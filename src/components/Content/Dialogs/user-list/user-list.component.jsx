import React from 'react';
import './user-list.styles.scss'

import User from './user/user.component';

const UserList = (props) => {
	let usersElements = props.users.map((user) => {
		return (
			<User key={user.id} id={user.id} name={user.name} count={user.count}/>
		);
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
