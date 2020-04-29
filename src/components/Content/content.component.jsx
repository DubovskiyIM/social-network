import React from 'react';
import { Route } from 'react-router-dom';

import ProfileComponent from './Profile/profile.component';
import DialogsComponent from './Dialogs/dialogs.component';

const Content = (props) => {
	return (
		<>
			<Route
				exact
				path='/'
				render={() => (
					<ProfileComponent
						profilePage={props.state.profilePage}
						dispatch={props.dispatch}
					/>
				)}
			/>
			<Route
				path='/dialogs'
				render={() => (
					<DialogsComponent
						dialogsPage={props.state.dialogsPage}
						dispatch={props.dispatch}
					/>
				)}
			/>
		</>
	);
};

export default Content;
