import React from 'react';

import { Row, Col } from 'antd';

import UserList from './user-list/user-list.component';
import Messages from './messages/messages.component';

const DialogsComponent = ({ users, ...otherMessagesProps }) => {
	return (
		<>
			<Row>
				<Col span={8}>
					<UserList users={users} />
				</Col>
				<Col span={16}>
					<Messages {...otherMessagesProps} />
				</Col>
			</Row>
		</>
	);
};

export default DialogsComponent;
