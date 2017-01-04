import React from 'react';
import {render}from 'react-dom';

import App from './component/app.js';

(function run(){
	render(
		<App />,
		document.getElementById('root')
	)
})()