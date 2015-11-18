var getJSON = require('./utils/get-json');
var renderer = require('./renderer');
var organizer = require('./organizer');

var APP = module.exports = {
	init: function() {
		getData()
			.then(function(data){
				return renderer.renderData(data.results);
			})
			.then(organizer.init)
			.then(function() {
				console.log('the application has started correctly');
			})
			.catch(function(err) {
				console.error(err);
			});
	}
};


var getData = function() {
	var url = 'http://localhost:8080';
	return getJSON(url)
		.catch(function(err) {
			console.log('there was an error', err);
		});
}
