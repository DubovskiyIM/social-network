import React from 'react';

import UserList from './user-list/user-list.component';
import Messages from './messages/messages.component';
import { Row, Col } from 'antd';

const DialogsComponent = (props) => {
	return (
		<>
			<Row>
				<Col span={8}>
					<UserList users={props.dialogsPage.users} />
				</Col>
				<Col span={16}>
					<Messages
						messages={props.dialogsPage.messages}
						newMessageText={props.dialogsPage.newMessageText}
						dispatch={props.dispatch}
					/>
				</Col>
			</Row>
		</>
	);
};

export default DialogsComponent;
