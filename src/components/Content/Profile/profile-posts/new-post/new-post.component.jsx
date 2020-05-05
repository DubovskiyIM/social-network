import React from 'react';
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

const NewPost = ({ addPost, changeText, value }) => {
	const addPostHandler = () => {
		addPost();
	};

	const onChangeTextHandler = (event) => {
		let newText = event.target.value;
		changeText(newText);
	};

	return (
		<>
			<Form.Item>
				<TextArea rows={4} value={value} onChange={onChangeTextHandler} />
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
