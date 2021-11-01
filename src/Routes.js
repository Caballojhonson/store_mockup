import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Store from './Pages/Store';
import App from './App';

export default function Routes() {
	return (
		<BrowserRouter  >
			<Switch>
				<Route exact path="/" component={Homepage} />
                <Route exact path="/store" component={Store} />
			</Switch>
		</BrowserRouter>
	);
}
