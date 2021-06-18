var http = require('http')
var mymdl = require('./mymodule')
http.createServer(function (req, res) {

    res.writeHead(200, {
        "Content-Type": 'text/html'
    });
    var book = [{
            name: "java",
            price: "200"
        },
        {
            name: "php",
            price: "300"
        },
        {
            name: "node",
            price: "400"
        },
        {
            name: "css",
            price: "600"
        },
        {
            name: "javascript",
            price: "700"
        }
    ];
    var data = "<h1> Book List " + book.length + "</h1>";
    book.map(bookinfo => {
        data = data + "<p>" + bookinfo.name + "---------------------" + bookinfo.price + "</p>";
    })
    data = data + mymdl.CityList();
    res.end(data);
}).listen(3131)