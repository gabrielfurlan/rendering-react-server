require('babel-register')({
	presets: ['react']
});

//Modules Node
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const router = require('express').Router();
const ReactRouter = require('react-router');

//Components
const Component = require('../src/component/Component.jsx');

//Render all routes
router.get('*', function(request, response) {
	const props = {title: 'Learning Redered in the Server!'}
	ReactRouter.match({
		routes: (
			<ReactRouter.Router history={ReactRouter.browserHistory} >
				<ReactRouter.Route path='/' component={Component} />
			</ReactRouter.Router>
		),
		location: request.url
	}, function(error, redirectLocation, renderProps) {
		if(renderProps) {
			const html = ReactDOMServer.renderToString(
				<ReactRouter.RouterContext {...renderProps} />
			); //Gerando HTML que será renderizado

			response.send(html); //Renderizando html na requisição da Rota
		} else {
			response.status(404).send('Not Found');
		}

	});
});

module.exports = router;
