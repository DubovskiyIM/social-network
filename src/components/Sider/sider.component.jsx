import React from 'react';
import { Link, withRouter, matchPath } from 'react-router-dom';

import { Layout, Menu, Avatar } from 'antd';

import {
	CustomerServiceOutlined,
	SettingOutlined,
	UserOutlined,
	BellOutlined,
	MessageOutlined,
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
			linkTo: '/',
			className: 'nav-text',
		},
		{
			key: ROUTE_KEYS.USER_DIALOGS,
			title: 'Messages',
			icon: <MessageOutlined />,
			linkTo: '/dialogs',
			className: 'nav-text',
		},
		{
			title: 'Feed',
			icon: <BellOutlined />,
			linkTo: '/feed',
			className: 'nav-text',
		},
		{
			title: 'Music',
			icon: <CustomerServiceOutlined />,
			linkTo: '/music',
			className: 'nav-text',
		},
		{
			title: 'Settings',
			icon: <SettingOutlined />,
			linkTo: '/settings',
			className: 'nav-text',
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
				{menuItems.map((menuItem) => {
					return (
						<Menu.Item key={menuItem.key}>
							{menuItem.icon}
							<span className='nav-text'>{menuItem.title}</span>
							<Link to={menuItem.linkTo} />
						</Menu.Item>
					);
				})}
			</Menu>
		</Sider>
	);
};

export default withRouter(SiderComponent);
