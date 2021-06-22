var http = require("http");
var mymdl = require('./mymodule');

http.createServer(function(request , response){
    response.writeHead(200, {'Content-Type':'text/html'});
   
    var data = "<h1> Welcome Page </h1>";
    data = data + "<p> dfg dfg dfg dfg dfg dfg dfg dfg  </p>";
    data = data + "<p> dfg dfg dfg dfg dfg dfg dfg dfg  </p>";
    data = data + "<p> dfg dfg dfg dfg dfg dfg dfg dfg  </p>";
    data = data + "<p> dfg dfg dfg dfg dfg dfg dfg dfg  </p>";
    data = data + mymdl.CityList();
    
    response.end(data);

}).listen(1234);