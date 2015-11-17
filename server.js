var http = require('http')
var jsonData = require('./data.json')
var jsonString = JSON.stringify(jsonData)

var server = http.createServer()

server.listen(8080, function(){
	console.log('server listening on port 8080')
})

server.on('request', function(req, res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.write(jsonString)
	res.end()
})