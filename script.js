// API: 9a14accd96c70fa4fba63f1bdc2c6c06

var city = $("citySearch").val()

$("#searchBtn").click(function() {
    localStorage.setItem("pastBtn");
});

$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=9a14accd96c70fa4fba63f1bdc2c6c06", function (data) {
    console.log(data);

    var city = data.city.name;
    var date = data.list[0].dt_txt;
    var icon = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
    var temp = "Temperature: " + data.list[0].main.temp + "°F";
    var humidity = "Humidity: " + data.list[0].main.humidity + "%";
    var windSpeed = "Wind Speed: " + data.list[0].wind.speed + " mph";

    $('.city').append(city);
    $('.date').append(date);
    $('.icon').attr('src', icon);
    $('.temp').append(temp);
    $('.humidity').append(humidity);
    $('.windSpeed').append(windSpeed);

});

$.getJSON("http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + data.city[2.0] + "&lon=" + data.city[2.1] + "&appid=9a14accd96c70fa4fba63f1bdc2c6c06", function (data) {
    console.log(data);

    var uvDisplay = "UV Index: " + data.value;

    $('.uvDisplay').append(uvDisplay);

});