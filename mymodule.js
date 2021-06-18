exports.CityList = () => {
    var city = ["Bangalore", "Chennai", "Kerala", "Delhi", "Mumbai"];
    var data = "";
    city.map(cityname => {
        data = data + "<p>" + cityname + "</p>";
    })
    return data;
}