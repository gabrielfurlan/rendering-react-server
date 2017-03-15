const React = require('react');
const Link = require('react-router').Link;

module.exports = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Hello Word!</h1>
				<p>Redering server-side</p>	
				{this.props.children}
				<hr/>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</div>
		);
	}

});