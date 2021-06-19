var http = require('http');
var fs = require('fs');

var fileObject = require('./headermodule');


http.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'text/html'});
var data = fileObject.TopHeader();

fs.readFile("./about.html", function(error, fileData){
    data = data + fileData;
    res.end(data);
})


}).listen(3131);