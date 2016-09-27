// Include React
var React = require('react');
var axios = require('axios');

// Component creation
var History = React.createClass({

	componentDidMount: function(){
		console.log("COMPONENT MOUNTED");

		// The moment the page renders on page load, we will retrieve the previous click count.
		// We will then utilize that click count to change the value of the click state.
		axios.get('/api')
			.then(function(results){
				this.setState({
					location: results.data
				});
				console.log("RESULTS", results);
				console.log("Saved location", results.data);
			}.bind(this));
	},

	// Here we render the function
	render: function(){
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">History</h3>
				</div>
				<div className="panel-body text-center">

						<h1>Address:</h1>
						<p>{this.state.address}</p>

				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;
