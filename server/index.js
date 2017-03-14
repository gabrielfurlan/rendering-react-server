//Modules Node
const express = require('express');

//Modules 
const routes = require('./server-routes.jsx'); //Importando as routes de servidor

const app = express(); //Intanciando Express
app.use('/public', express.static('public'));
app.use(routes);


const PORT = 3002; //Definindo a Porta 
app.listen(PORT, function () { //Executando server
	console.log('http://localhost:' + PORT);
});
