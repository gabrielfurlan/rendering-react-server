//Modulos Node
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;

//Components
const Layout = require('./../src/components/layout.jsx');

//Exports
module.exports = function(app){
	app.get('/', function(request, response) { //Definindo Rota /

		
	});
}

