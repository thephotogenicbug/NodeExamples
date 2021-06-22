var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'}); 

// file operation start here
fs.appendFile("info.txt", 'Hello how are you today ?\n', function(error){
    if(error){
        res.end("Sorry !, Error while writing....")
    }
    res.end("<h2>The file has been updated successfully</h2>");
})

}).listen(1234)