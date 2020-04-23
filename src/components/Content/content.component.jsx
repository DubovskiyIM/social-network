import React from 'react';
import { Route } from 'react-router-dom';

import ProfileComponent from './Profile/profile.component';
import DialogsComponent from './Dialogs/dialogs.component';

const Content = () => {
	return (
		<div>
			<Route exact path='/' component={ProfileComponent} />
			<Route path='/dialogs' component={DialogsComponent} />
		</div>
	);
};

export default Content;
