import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './components/HomeContainer';
import React from 'react';
import { render } from 'react-dom';

render(
	<BrowserRouter>
		<Switch>
			<Route exact={true} path="/" component={HomeContainer} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('app'),
);
