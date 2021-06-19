
exports.CityList = () => {
    var city = ["Bangalore", "Pune", "Mumbai", "Kolkata", "Chennai", "Delhi", "Patna"];
    var data = "";
    city.map(cityname => {
        data = data + "<p style='display:inline; padding:15px;'>" + cityname + "</p>";
    })
    return data;
}

exports.BookList = () =>{
    var book = ["Java", "Node", "php", "html", "css", "Mysql", "JavaScript"];
    var data = "";
    book.map(name => {
        data = data + "<p style='display:inline; padding:15px;'>" + name + "</p>";
    })
    return data;
}


