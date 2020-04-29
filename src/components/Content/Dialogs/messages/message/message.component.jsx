import React from 'react';

import { Comment, Avatar } from 'antd';

const Message = (props) => {
	return (
		<Comment
			author={<a>{props.author}</a>}
			avatar={
				<Avatar
					src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
					alt='Han Solo'
				/>
			}
			content={<p>{props.content}</p>}
		/>
	);
};

export default Message;