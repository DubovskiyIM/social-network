import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Avatar } from 'antd';

import {
	CustomerServiceOutlined,
	SettingOutlined,
	UserOutlined,
	BellOutlined,
	MessageOutlined,
} from '@ant-design/icons';


const { Sider } = Layout;

const SiderComponent = () => {
	return (
		<Sider
			style={{
				overflow: 'auto',
				height: '100vh',
				position: 'fixed',
				left: 0,
				paddingTop: '0px',
			}}
		>
			<Avatar
				size='large'
				icon={<UserOutlined />}
				style={{
					backgroundColor: '#1890ff',
					margin: '15px',
					cursor: 'pointer',
				}}
			/>
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
				<Menu.Item key='1'>
					<UserOutlined />
					<span className='nav-text'>Profile</span>
					<Link to="/" />
				</Menu.Item>
				<Menu.Item key='2'>
					<MessageOutlined />
					<span className='nav-text'>Messages</span>
					<Link to="/dialogs" />
				</Menu.Item>
				<Menu.Item key='3'>
					<BellOutlined />
					<span className='nav-text'>Feed</span>
					<Link to="/feed" />
				</Menu.Item>
				<Menu.Item key='4'>
					<CustomerServiceOutlined />
					<span className='nav-text'>Music</span>
					<Link to="/music" />
				</Menu.Item>
				<Menu.Item key='5'>
					<SettingOutlined />
					<span className='nav-text'>Settings</span>
					<Link to="/settings" />
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default SiderComponent;
