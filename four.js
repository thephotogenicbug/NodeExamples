var http = require("http");
var mymdl = require('./mymodule');

http.createServer(function(req , res){
    res.writeHead(200 , {'Content-Type':'text/html'});

    var book = [
        {name:"Java", price:"200"},
        {name:"PHP", price:"300"},
        {name:"Node", price:"600"},
        {name:"CSS", price:"800"},
        {name:"ReactJs", price:"700"},
        {name:"SAP", price:"240"},
        {name:"Mysql", price:"900"}
    ];
    var data = "<h1> Book List "+ book.length + "</h1>";
    book.map(bookinfo=>{
        data = data + "<p>" + bookinfo.name + " ---------- "+ bookinfo.price + "</p>";
    })
    data = data + mymdl.CityList();
    data = data + "<br/>" + mymdl.BookList();
    res.end(data);

}).listen(1234);