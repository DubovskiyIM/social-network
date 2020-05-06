import React from 'react';

import Message from './message/message.component';
import NewMessage from './new-message/new-message.component';

const Messages = ({ messages, ...otherNewMessageProps }) => {
	let messagesElements = messages.map(({ ...messageProps }) => {
		return <Message {...messageProps} />;
	});
	return (
		<div style={{ marginRight: 20, padding: 20 }}>
			{messagesElements}
			<NewMessage {...otherNewMessageProps} />
		</div>
	);
};

export default Messages;
