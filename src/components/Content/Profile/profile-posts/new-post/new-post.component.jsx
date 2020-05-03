import React from 'react';
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

const NewPost = (props) => {

	const addPostHandler = () => {
		props.addPost();
	};

	const onChangeTextHandler = (event) => {
		let newText = event.target.value;
		props.changeText(newText);
	};

	return (
		<>
			<Form.Item>
				<TextArea
					rows={4}
					value={props.value}
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
