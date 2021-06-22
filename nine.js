var http = require('http')


http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/json'}); 

    var book = [
        {name:"Java", price:"200"},
        {name:"PHP", price:"300"},
        {name:"Node", price:"600"},
        {name:"CSS", price:"800"},
        {name:"ReactJs", price:"700"},
        {name:"SAP", price:"240"},
        {name:"Mysql", price:"900"}
    ];
    res.end(JSON.stringify(book)); // array to json

}).listen(1234)