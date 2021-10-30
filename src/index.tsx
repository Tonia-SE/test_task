import React from 'react';
import { render } from 'react-dom';
import { rootReducer } from './store/reducers/rootReduser';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), composeEnhancers()));
sagaMiddleware.run(rootSaga);

const routing = (
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
);

render(routing, document.querySelector('#root'));
