var http = require('http')
var url = require('url')

http.createServer(function(req,res){
    var urlData = url.parse(req.url , true);
    var queryData = urlData.query;  // ?name=Naveen&age=24&education=B.com
    
    res.writeHead(200, {'Content-Type':'text/html'});
    
         
    res.write("<center>");
    res.write("<a href='?name=Naveen&age=24&education=B.COM'>Naveen</a>--------------");
    res.write("<a href='?name=Bummo&age=24&education=B.COM'>Bummo</a>---------------");
    res.write("</center>");

    res.write("<h1 align='center'> Name is : " + queryData.name + "</h1>"); //http://localhost:1234/?name=Naveen&age=24&education=B.com  query string   
    res.write("<h1 align='center'> Age is : " + queryData.age + "</h1>");
    res.write("<h1 align='center'> Education is : " + queryData.education + "</h1>"); 
    res.end()   

}).listen(1234);
