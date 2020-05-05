import React from 'react';

import { Form, Button, Input } from 'antd';

const { TextArea } = Input;

const NewMessage = ({ addMessage, changeInputMessage, newMessageText }) => {
	return (
		<>
			<Form.Item>
				<TextArea
					rows={4}
					value={newMessageText}
					onChange={(e) => changeInputMessage(e.target.value)}
				/>
			</Form.Item>
			<Form.Item>
				<Button type='primary' style={{ float: 'right' }} onClick={addMessage}>
					Send
				</Button>
			</Form.Item>
		</>
	);
};

export default NewMessage;
