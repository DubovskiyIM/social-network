import React from 'react';
import { Link, withRouter, matchPath } from 'react-router-dom';

import { Layout, Menu, Avatar } from 'antd';

import {
	CustomerServiceOutlined,
	SettingOutlined,
	UserOutlined,
	BellOutlined,
	MessageOutlined,
	TeamOutlined,
} from '@ant-design/icons';

import { ROUTE_KEYS, ROUTES } from '../../routes/routes';

const { Sider } = Layout;

const SiderComponent = ({ location }) => {
	const getMatchedKey = (location) =>
		(
			Object.values(ROUTES).find((route) =>
				matchPath(location.pathname, route)
			) || {}
		).path;

	const menuItems = [
		{
			key: ROUTE_KEYS.ROOT,
			title: 'Profile',
			icon: <UserOutlined />,
		},
		{
			key: ROUTE_KEYS.USER_DIALOGS,
			title: 'Messages',
			icon: <MessageOutlined />,
		},
		{
			key: ROUTE_KEYS.USER_FRIENDS,
			title: 'Friends',
			icon: <TeamOutlined />,
		},
		{
			title: 'Feed',
			icon: <BellOutlined />,
			key: '/feed',
		},
		{
			title: 'Music',
			icon: <CustomerServiceOutlined />,
			key: '/music',
		},
		{
			title: 'Settings',
			icon: <SettingOutlined />,
			key: '/settings',
		},
	];

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
			<Menu theme='dark' mode='inline' selectedKeys={[getMatchedKey(location)]}>
				{menuItems.map(({ key, icon, title }) => {
					return (
						<Menu.Item key={key}>
							{icon}
							<span className='nav-text'>{title}</span>
							<Link to={key} />
						</Menu.Item>
					);
				})}
			</Menu>
		</Sider>
	);
};

export default withRouter(SiderComponent);
