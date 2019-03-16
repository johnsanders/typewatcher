import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/style.css';
import HomeContainer from './components/HomeContainer';

render(
	<BrowserRouter basename="/typewatcher">
		<Switch>
			<Route exact={true} path="/" component={HomeContainer} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('app'),
);
