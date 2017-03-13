//Modules Node
const express = require('express');
const React = require('react');

//Modules 
const routes = require('./server-routes'); //Importando as routes de servidor

const app = express(); //Intanciando Express
app.use('/public', express.static('public'))

routes(app); //Aplicando o Express nas Routes

const PORT = 3002; //Definindo a Porta 
app.listen(PORT, function () { //Executando server
	console.log('http://localhost:' + PORT);
});
