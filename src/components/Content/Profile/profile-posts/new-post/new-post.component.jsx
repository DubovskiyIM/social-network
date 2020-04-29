import React from 'react';
import { Button, Form, Input } from 'antd';

import {
	addPostActionCreator,
	changeInputTextActionCreator,
} from '../../../../../redux/profile/profile.actions';

const { TextArea } = Input;

const NewPost = (props) => {
	const addPostHandler = () => {
		props.dispatch(addPostActionCreator());
	};

	const onChangeTextHandler = (event) => {
		let newText = event.target.value;
		props.dispatch(changeInputTextActionCreator(newText));
	};

	return (
		<>
			<Form.Item>
				<TextArea
					rows={4}
					value={props.newPostText}
					onChange={onChangeTextHandler}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					type='primary'
					style={{ float: 'right' }}
					onClick={addPostHandler}
				>
					Add Post
				</Button>
			</Form.Item>
		</>
	);
};

export default NewPost;
