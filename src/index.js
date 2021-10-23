import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { searchRobots } from "./reducers";
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import 'tachyons';
import './index.css';

const store = createStore(searchRobots)

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
