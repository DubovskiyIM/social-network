import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';
import 'antd/dist/antd.css';

import store from './redux/store';

const rerenderEntireTree = (state) => {
	ReactDOM.render(
		<App
			state={state}
			dispatch={store.dispatch.bind(store)}
		/>,
		document.getElementById('root')
	);
};

rerenderEntireTree(store.getState());


store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state)
})