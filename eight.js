var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'}); 

// unlink operation start here
fs.unlink("info.txt", function(error, data){
    if(error){
        res.end("Sorry , The file not exist")
    }
    res.end("<h2>Info.txt deleted successfully</h2>");
})

}).listen(1234)