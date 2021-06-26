var http = require('http')
var serviceData = [
     {name:"website development",     price:3000, pic:"1.png"},
     {name:"Mobile app development",  price:1000, pic:"2.png"},
     {name:"Project designing",       price:5000, pic:"3.png"},
     {name:"Portal development",      price:7000, pic:"4.png"},
     {name:"Project Testing",         price:9000, pic:"5.png"},
     {name:"Digital marketing",       price:7000, pic:"6.png"}
];

http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.writeHead(200, {'Content-Type':'Application/json'});
    var JsonData = JSON.stringify(serviceData)
    res.write(JsonData);
    res.end();
    
}).listen(8082)