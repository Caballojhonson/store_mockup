import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Homepage from './Pages/Homepage';
import Store from './Pages/Store';

export default function Routes() {
	return (
		<HashRouter >
			<Switch>
				<Route exact path="/" component={Homepage} />
                <Route exact path="/app" component={App} />
                <Route exact path="/store" component={Store} />
			</Switch>
		</HashRouter>
	);
}
