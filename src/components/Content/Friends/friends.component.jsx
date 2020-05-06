import React, { useEffect } from 'react';

import FriendComponent from './friend/friend.component';

const FriendsComponent = ({ friends, setUsers }) => {
	useEffect(() => {
		if (friends.length === 0) {
			setUsers([
				{
					id: 1,
					userName: 'Vasya',
					userSurname: 'Petrov',
					isOnline: true,
					imgSrc:
						'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				},
				{
					id: 2,
					userName: 'Petya',
					userSurname: 'Ivanov',
					isOnline: false,
					imgSrc:
						'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				},
				{
					id: 3,
					userName: 'Ilya',
					userSurname: 'Sedov',
					isOnline: true,
					imgSrc:
						'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				},
				{
					id: 4,
					userName: 'Sergey',
					userSurname: 'Kuzmin',
					isOnline: true,
					imgSrc:
						'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				},
				{
					id: 5,
					userName: 'Oleg',
					userSurname: 'Titov',
					isOnline: true,
					imgSrc:
						'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				},
			]);
		}
	});

	let friendsElements = friends.map(({ id, ...otherFriendProps }) => {
		return <FriendComponent key={id} {...otherFriendProps} />;
	});
	return <>{friendsElements}</>;
};

export default FriendsComponent;
