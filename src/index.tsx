import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/saga';
import { rootReducer } from './store/rootReduser';
import { App } from './App';
import Page from './components/Page';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	rootReducer,
	compose(applyMiddleware(sagaMiddleware), composeEnhancers())
);
sagaMiddleware.run(rootSaga);

const routing = (
	<Router>
		<Provider store={store}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/topic" component={Page} />
			</Switch>
		</Provider>
	</Router>
);

render(routing, document.querySelector('#root'));
