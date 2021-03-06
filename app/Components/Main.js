// Include React
var React = require('react');

// Here we include all of the sub-components
var Search = require('./Children/Search');
var Results = require('./Children/Results');
var Save = require('./Children/Results');
// Helper Function
var helpers = require('./utils/helpers.js');

// This is the main component.
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			searchTerm: "",
			results: ""
		}
	},

	// We use this function to allow children to update the parent with searchTerms.
	setTerm: function(term){
		this.setState({
			searchTerm: term
		})
	},

	// If the component updates we'll run this code
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			helpers.runQuery(this.state.searchTerm)
				.then(function(data){
					if (data != this.state.results)
					{
						console.log("HERE");
						console.log(data);

						this.setState({
							results: data
						})
					}


				// This code is necessary to bind the keyword "this" when we say this.setState
				// to actually mean the component itself and not the runQuery function.
				}.bind(this))
		}
	},

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2 className="text-center">New York Times Article Scrubber</h2>
						<p className="text-center"><em>Search and annotate articles of interest!</em></p>
					</div>

					<div className="col-md-6">

						<Search setTerm={this.setTerm}/>

					</div>

					<div className="col-md-6">

						<Results address={this.state.results} />

					</div>
				</div>
				<div className="row">

					<div className="col-md-12">

						<Save address={this.state.results} />

					</div>
				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;
