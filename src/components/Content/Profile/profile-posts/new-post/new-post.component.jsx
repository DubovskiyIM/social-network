import React from 'react';
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

const NewPost = ({ addPost, changeText, value }) => {
	return (
		<>
			<Form.Item>
				<TextArea
					rows={4}
					value={value}
					onChange={(e) => changeText(e.target.value)}
				/>
			</Form.Item>
			<Form.Item>
				<Button type='primary' style={{ float: 'right' }} onClick={addPost}>
					Add Post
				</Button>
			</Form.Item>
		</>
	);
};

export default NewPost;
