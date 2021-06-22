var http = require('http')
const city = ["Bangalore", "Chennai", "Madras", "Kerala", "Navi Mumbai"]; // array data
const jsonData = JSON.stringify(city); // converting from array to json
http.createServer(function(req,res){

res.writeHead(200, {'Content-Type':'text/json'});
//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
res.end(jsonData);

}).listen(8080);