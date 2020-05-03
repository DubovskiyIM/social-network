import React from 'react';
import { Route } from 'react-router-dom';

import ProfileComponent from './Profile/profile.component';
import DialogsComponentContainer from './Dialogs/dialogs.container';

const Content = (props) => {
	return (
		<>
			<Route exact path='/' render={() => <ProfileComponent />} />
			<Route path='/dialogs' render={() => <DialogsComponentContainer />} />
		</>
	);
};

export default Content;
