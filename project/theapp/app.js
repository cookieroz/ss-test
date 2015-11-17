var getJSON = require('./utils/get-json')
var renderData = require('./renderer')

var APP = module.exports = {
	init: function(){
		getData()
			.then(function(data){ console.log('lalala', data); return data})
			.then(renderData)
			.then(function(data){
				console.log('the application has started correctly', data)
			})
			.catch
	}
};


var getData = function(){
	var url = 'http://localhost:8080'
	return getJSON(url)
		.catch(function(err){
			console.log('there was an error', err)
		})
}