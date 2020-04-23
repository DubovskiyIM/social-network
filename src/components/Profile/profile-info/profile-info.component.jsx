import React from 'react';

import { Card, Descriptions } from 'antd';

const ProfileInfo = () => {
	return (
		<div
			className='user-info'
			style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}
		>
			<Card
				style={{
					width: 240,
					height: 240,
					marginBottom: 100,
				}}
				cover={
					<img
						alt='example'
						src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
					/>
				}
			/>
			<Descriptions
				title='User Info'
				column={3}
				style={{ alignSelf: 'center', float: 'left' }}
			>
				<Descriptions.Item label='UserName'>Zhou Maomao</Descriptions.Item>
				<Descriptions.Item label='Telephone'>1810000000</Descriptions.Item>
				<Descriptions.Item label='Live'>Hangzhou, Zhejiang</Descriptions.Item>
				<Descriptions.Item label='Remark'>empty</Descriptions.Item>
				<Descriptions.Item label='Address'>
					No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
				</Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default ProfileInfo;
