import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Homepage from './Pages/Homepage';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Homepage} />
                <Route exact path="/App" component={App} />
			</Switch>
		</BrowserRouter>
	);
}
