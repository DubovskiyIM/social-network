import React, { createElement } from 'react';
import { Comment, Avatar, Tooltip } from 'antd';
import { LikeFilled } from '@ant-design/icons';

const Post = (props) => {
	return (
		<div
			style={{
				border: '1px solid lightgray',
				borderRadius: 5,
				marginBottom: 10,
				padding: 20,
				textAlign: 'start',
			}}
		>
			<Comment
				author={<a href='/main'>Zhou Maomao</a>}
				avatar={
					<Avatar
						src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
						alt='Han Solo'
					/>
				}
				content={<p>{props.content}</p>}
			></Comment>
			<Tooltip title='Like'>{createElement(LikeFilled)}</Tooltip>
			<span className='likesCounts' style={{ paddingLeft: 10 }}>
				{props.likesCounts}
			</span>
		</div>
	);
};

export default Post;
