//Modules Node
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;
const ReactRouter = require('react-router');
const express = require('express');

//Components
const Layout = require('./../src/components/layout.jsx');
const routes = require('./../src/routes.jsx');


const app = express(); //Intanciando Express
app.use('/', express.static('public'));
//app.use(handleRender); //Sempre que tiver request executara a function de render

app.get('*', function(request, response) {
	
	ReactRouter.match({
		routes: routes,
		location: request.url
	}, function(error, redirectLocation, renderProps) {

		if(renderProps) { 
			handleRender(request, response, renderProps);
		} else {
			response.status(404).send('Not Found');
		}

	});

});

//Function for to render component
function handleRender(request, response, renderProps) {

	const initialState = {title: 'Render Test'}; //Define preloaded initial state 
	const reducer = function(state = initialState, action){ return state }; //Create Reducer

	const store = createStore(reducer); //Create Stote

	const html = ( //Rendering DOM
		<Provider store={store}>
			<ReactRouter.RouterContext {...renderProps} />
		</Provider>
	);

	const page = {
		html: html,
		seo: {
			title: 'Rendering teste'		
		}
	}
	const preloadedState = store.getState(); //Save preloaded state
	response.send(renderFullPage(page, preloadedState)); //executing and passing preloaded state
}


function renderFullPage(page, preloadedState) {
	return ReactDOMServer.renderToString(
		<html>
			<head>
				<title>{page.seo.title}</title>
				<link rel="stylesheet" href="/stylesheets/index.css" />
			</head>
			<body>
				<div root-page>{page.html}</div>
				<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
				<script src="/script/bundle.js"></script>
			</body>
		</html>
	);
}

const PORT = 3002; //Definindo a Porta 
app.listen(PORT, function () { //Executando server
	console.log('http://localhost:' + PORT);
});
