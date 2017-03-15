//Modules Node
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const history = ReactRouter.history;

//Components
const Layout = require('./components/layout.jsx');
const Home = require('./components/home.jsx');
const About = require('./components/about.jsx');

module.exports = (
	<Router history={history} >
		{console.log(ReactRouter)}
		<Route path='/' component={Layout}>
			<IndexRoute component={Home} />
			<Route path='about' component={About} />
		</Route>
	</Router>

);