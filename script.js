// API: 9a14accd96c70fa4fba63f1bdc2c6c06

$("#searchBtn").click(function () {
    var searchValue = $("#citySearch").val();

    // Currrent
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=imperial&appid=9a14accd96c70fa4fba63f1bdc2c6c06", function (data) {
        console.log(data);

        var city = data.name;
        var date = new Date();
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = "Temperature: " + data.main.temp + "°F";
        var humidity = "Humidity: " + data.main.humidity + "%";
        var windSpeed = "Wind Speed: " + data.wind.speed + " mph";

        $('.city').append(city);
        document.getElementById("date").innerHTML = date.toDateString();
        $('.icon').attr('src', icon);
        $('.temp').append(temp);
        $('.humidity').append(humidity);
        $('.windSpeed').append(windSpeed);

        var latitude = data.coord.lat;
        var longitude = data.coord.lon;

        $.getJSON("http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=9a14accd96c70fa4fba63f1bdc2c6c06", function (data) {
            console.log(data);
            var uvDisplay = "UV Index: " + data.value;
            
            $('.uvDisplay').addClass("lowUV");
            $('.uvDisplay').append(uvDisplay);
        });
    });


    // Forecasting
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + searchValue + "&cnt=5&units=imperial&appid=9a14accd96c70fa4fba63f1bdc2c6c06", function (data) {
        console.log(data);

        var date = data.list[0].dt_txt;
        var icon = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
        var temp = "Temperature: " + data.list[0].main.temp + "°F";
        var humidity = "Humidity: " + data.list[0].main.humidity + "%";


        // Day One
        var date = data.list[1].dt_txt;
        var icon = "http://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png";
        var temp = "Temperature: " + data.list[1].main.temp + "°F";
        var humidity = "Humidity: " + data.list[1].main.humidity + "%";

        $('.dateOne').append(date);
        $('.iconOne').attr('src', icon);
        $('.tempOne').append(temp);
        $('.humidityOne').append(humidity);

    });

});

//dayFive