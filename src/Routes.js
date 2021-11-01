import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Homepage from './Pages/Homepage';
import Store from './Pages/Store';

export default function Routes() {
	return (
		<BrowserRouter basename="/store_mockup">
			<Switch>
				<Route exact path="/" component={Homepage} />
                <Route exact path="/app" component={App} />
                <Route exact path="/store" component={Store} />
			</Switch>
		</BrowserRouter>
	);
}
