import React from 'react';

import './App.css';

import { Layout } from 'antd';

import HeaderComponent from './components/Header/header.component';
import SiderComponent from './components/Sider/sider.component';
import ProfileComponent from './components/Profile/profile.component';
import FooterComponent from './components/Footer/footer.component';

const App = () => {
	return (
		<Layout>
			<SiderComponent/>
			<Layout className='site-layout' style={{ marginLeft: 200 }}>
				<HeaderComponent/>
				<ProfileComponent/>
				<FooterComponent/>
			</Layout>
		</Layout>
	);
};

export default App;
