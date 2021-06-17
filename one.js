var http = require('http');
http.createServer(function(req, res){


    res.end('<h1>Welcome to node</h1>');
    res.end('This is test '); 

}).listen(4141)