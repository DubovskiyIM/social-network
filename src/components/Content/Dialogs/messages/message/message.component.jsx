import React from 'react';

import { Comment, Avatar } from 'antd';

const Message = ({ author, content }) => {
	return (
		<Comment
			author={<a href='#/test'>{author}</a>}
			avatar={
				<Avatar
					src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
					alt='Han Solo'
				/>
			}
			content={<p>{content}</p>}
		/>
	);
};

export default Message;
