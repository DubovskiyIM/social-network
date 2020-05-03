import React from 'react';

import Message from './message/message.component';
import NewMessage from './new-message/new-message.component';

const Messages = (props) => {
	let messagesElements = props.messages.map((message) => {
		return (
			<Message
				key={message.id}
				author={message.author}
				content={message.content}
			/>
		);
	});

	return (
		<div style={{ marginRight: 20, padding: 20 }}>
			{messagesElements}
			<NewMessage
				newMessageText={props.newMessageText}
				addMessage={props.addMessage}
				changeInputMessage={props.changeInputMessage}
			/>
		</div>
	);
};

export default Messages;
