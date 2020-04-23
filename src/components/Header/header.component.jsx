import React from 'react';

import { Layout } from 'antd';

const { Header } = Layout

const HeaderComponent = () => {
	return (
		<Header
			className='site-layout-background'
			style={{
				fontSize: '30px',
				color: '#fff',
				textAlign: 'center',
			}}
		>
			<span style={{cursor: 'pointer'}}>Social Network</span>
		</Header>
	);
};

export default HeaderComponent;
