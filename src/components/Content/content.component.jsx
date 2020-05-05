import React from 'react';
import { Route } from 'react-router-dom';
import { ROUTES} from '../../routes/routes'


const Content = (props) => {
	return (
		<>
			{/* <Route exact path='/' render={() => <ProfileComponent />} />
			<Route path='/dialogs' render={() => <DialogsComponentContainer />} />
			<Route path='/friends' render={() => <FriendsComponent />} /> */}
			 {Object.values(ROUTES).map((route) => (
                    <Route {...route} />
                ))}
		</>
	);
};

export default Content;
