import React from 'react';
import { Route } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Content = () => {
	return (
		<>
			{Object.values(ROUTES).map((route) => (
				<Route {...route} />
			))}
		</>
	);
};

export default Content;
