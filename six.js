var http = require("http"); // for network call
var fs = require("fs"); // for file system 

var fileObject = require("./headermodule");

http.createServer(function(req , res){
res.writeHead(200 , {'Content-Type':'text/html'});
var header = fileObject.TopHeader();

var filename = "."+req.url;  // adding . in begning of file as => ./filename.html
if(filename=="./"){
    filename = "./index.html";
}

fs.readFile(filename, function(error , fileData){
    if(error){
        res.end( header + "<h2 align='center'> Sorry Friend ! This page is not available</h2>");
    }
    res.end( header + fileData + filename);
})

}).listen(1234);

