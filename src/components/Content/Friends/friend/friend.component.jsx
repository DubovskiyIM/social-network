import React from 'react';

import { Avatar, Badge } from 'antd';

import ModalMessage from '../../../modals/modal-message.container';

const FriendComponent = ({ userName, userSurname, imgSrc, isOnline }) => {
	return (
		<div
			style={{
				margin: '0 auto',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				border: '1px solid rgba(0, 0, 0, .2)',
				borderRadius: 5,
				width: '50%',
				padding: 10,
				marginTop: 20,
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Badge
					status={isOnline ? 'success' : 'default'}
					style={{ position: 'absolute', top: 35, right: 5 }}
				>
					<Avatar size='large' src={imgSrc} />
				</Badge>
				<span style={{ paddingLeft: 20 }}>{`${userName} ${userSurname}`}</span>
			</div>
			<ModalMessage
				userName={userName}
				userSurname={userSurname}
				imgSrc={imgSrc}
				isOnline={isOnline}
			/>
		</div>
	);
};

export default FriendComponent;
