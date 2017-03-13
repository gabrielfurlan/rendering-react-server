require('babel-register')({
	presets: ['react']
});

//Modules Node
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

//Components
const Component = require('../src/component/Component.jsx');

module.exports = function(app) {

	//Routes Server
	app.get('/', function(request, response){ //Definindo Rota
		const props = {title: 'Learning Redered in the Server!'}
		const html = ReactDOMServer.renderToString(
			React.createElement(Component, props)
		); //Gerando HTML que será renderizado
		response.send(html); //Renderizando html na requisição da Rota
	});

}