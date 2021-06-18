var http = require('http')
http.createServer(function(req, res){
res.writeHeader(200 , {'Content-Type': 'text/html'});


var book = ["php", "java", "net", "Angular", "React", "css", "SAP"];


    var data = "<h1>Available Books " +book.length+ "</h1>";
    book.map(bookname =>{
        data = data + "<p>" + bookname + "</p>"
    })
    res.end(data);

}).listen(3131)