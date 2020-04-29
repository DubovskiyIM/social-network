import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import { Layout } from 'antd';

import HeaderComponent from './components/Header/header.component';
import SiderComponent from './components/Sider/sider.component';
import FooterComponent from './components/Footer/footer.component';
import Content from './components/Content/content.component';

const App = (props) => {
	return (
		<BrowserRouter>
			<Layout>
				<SiderComponent />
				<Layout className='site-layout' style={{ marginLeft: 200 }}>
					<HeaderComponent />
					<Content
						state={props.state}
						dispatch={props.dispatch}
					/>
					<FooterComponent />
				</Layout>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
