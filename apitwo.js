var http = require('http')
const book = [
    {name :"Java", price:"300"},
    {name:"Angular", price:"500"},
    {name:"html", price:"400"},
    {name:"css", price:"300"},
    {name:"nodejs", price:"500"}
]; // array data
const jsonData = JSON.stringify(book); // converting from array to json
http.createServer(function(req,res){

res.writeHead(200, {'Content-Type':'text/json'});
//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
res.end(jsonData);

}).listen(8081);