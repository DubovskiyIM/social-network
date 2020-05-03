import React from 'react';

import UserList from './user-list/user-list.component';
import Messages from './messages/messages.component';
import { Row, Col } from 'antd';

const DialogsComponent = (props) => {
	return (
		<>
			<Row>
				<Col span={8}>
					<UserList users={props.users} />
				</Col>
				<Col span={16}>
					<Messages
						messages={props.messages}
						newMessageText={props.newMessageText}
						addMessage={props.addMessage}
						changeInputMessage={props.changeInputMessage}
					/>
				</Col>
			</Row>
		</>
	);
};

export default DialogsComponent;
