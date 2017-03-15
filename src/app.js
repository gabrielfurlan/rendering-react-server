//Modules node
const React = require('react');
const ReactDOM = require('react-dom');
const Layout = require('./components/layout.jsx');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;

const Router = require('./routes.jsx');

const preloadedState = window.__PRELOADED_STATE___; //Get initial state from server
delete window.__PRELOADED_STATE___; //Delete state from server

const reducer = function(state = preloaderState, action){ return state }; //Create Reducer
const store = createStore(reducer, preloaderState); //Create Stote

ReactDOM.render(
	<Provider store={store}>
		{Router}
	</Provider>, document.querySelector('[root-page]')
);