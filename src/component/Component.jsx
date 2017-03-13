const React = require('react');

module.exports = React.createClass({
	
	render: function() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/public/stylesheets/index.css" />
				</head>
				<body>
					<div>
						<h1>Teste de Redering</h1>
						<p>Rendered Here</p>
					</div>
					<script src="/public/script/bundle.js" />
				</body>
			</html>
		);
	}

});