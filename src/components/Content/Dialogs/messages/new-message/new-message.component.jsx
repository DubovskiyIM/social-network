import React from 'react';
import {
	addMessageActionCreator,
	changeInputMessageActionCreator,
} from '../../../../../redux/dialogs/dialogs.actions';

import { Form, Button, Input } from 'antd';

const { TextArea } = Input;

const NewMessage = (props) => {
	const addMessageHandler = () => {
		props.dispatch(addMessageActionCreator());
	};

	const onChangeMessageTextHandler = (event) => {
		let newMessageText = event.target.value;
		props.dispatch(changeInputMessageActionCreator(newMessageText));
	};

	return (
		<>
			<Form.Item>
				<TextArea
					rows={4}
					value={props.newMessageText}
					onChange={onChangeMessageTextHandler}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					type='primary'
					style={{ float: 'right' }}
					onClick={addMessageHandler}
				>
					Send
				</Button>
			</Form.Item>
		</>
	);
};

export default NewMessage;
