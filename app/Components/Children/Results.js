// Include React
var React = require('react');
var axios = require('axios');

// Component creation
var Results = React.createClass({


	componentDidUpdate: function(prevProps, prevState){
		console.log("COMPONENT UPDATED");

		// We will check if the click count has changed...
		if (prevState.clicks != this.state.clicks){

			// If it does, then update the clickcount in MongoDB
			axios.post('/api', {location: this.state.location, date: this.state.date})
				.then(function(results){
					console.log("Posted to MongoDB");
				})
		}
	},

	// Here we render the function
	render: function(){


		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body text-center">
						<p>{this.props.address}</p>

				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;
