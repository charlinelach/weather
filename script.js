// API: 9a14accd96c70fa4fba63f1bdc2c6c06

$("#searchBtn").click(function () {
    var searchValue = $("#citySearch").val();

    // Current
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
            var uvValue = document.querySelector(".uvDisplay");
            if (data.value <= 2) {
                uvValue.style.color = "green";
            } else if (data.value <= 5) {
                uvValue.style.color = "gold";
            } else if (data.value <= 7) {
                uvValue.style.color = "orange";
            } else if (data.value <= 10) {
                uvValue.style.color = "red";
            } else {
                uvValue.style.color = "purple";
            }
            $('.uvDisplay').append(uvDisplay);
        });

        // Forecasting
        $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=9a14accd96c70fa4fba63f1bdc2c6c06", function (data) {
            console.log(data);

            // Day 0
            var date0 = new Date(data.daily[0].dt * 1000);
            var icon0 = "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png";
            var temp0 = "Temperature: " + data.daily[0].temp.day + "°F";
            var humidity0 = "Humidity: " + data.daily[0].humidity + "%";

            $('.date0').append(date0);
            $('.icon0').attr('src', icon0);
            $('.temp0').append(temp0);
            $('.humidity0').append(humidity0);

            // Day 1
            var date1 = new Date(data.daily[1].dt * 1000);
            var icon1 = "http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png";
            var temp1 = "Temperature: " + data.daily[1].temp.day + "°F";
            var humidity1 = "Humidity: " + data.daily[1].humidity + "%";

            $('.date1').append(date1);
            $('.icon1').attr('src', icon1);
            $('.temp1').append(temp1);
            $('.humidity1').append(humidity1);

            // Day 2
            var date2 = new Date(data.daily[2].dt * 1000);
            var icon2 = "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png";
            var temp2 = "Temperature: " + data.daily[2].temp.day + "°F";
            var humidity2 = "Humidity: " + data.daily[2].humidity + "%";

            $('.date2').append(date2);
            $('.icon2').attr('src', icon2);
            $('.temp2').append(temp2);
            $('.humidity2').append(humidity2);

            // Day 3
            var date3 = new Date(data.daily[3].dt * 1000);
            var icon3 = "http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png";
            var temp3 = "Temperature: " + data.daily[3].temp.day + "°F";
            var humidity3 = "Humidity: " + data.daily[3].humidity + "%";

            $('.date3').append(date3);
            $('.icon3').attr('src', icon3);
            $('.temp3').append(temp3);
            $('.humidity3').append(humidity3);

            // Day 4
            var date4 = new Date(data.daily[4].dt * 1000);
            var icon4 = "http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png";
            var temp4 = "Temperature: " + data.daily[4].temp.day + "°F";
            var humidity4 = "Humidity: " + data.daily[4].humidity + "%";

            $('.date4').append(date4);
            $('.icon4').attr('src', icon4);
            $('.temp4').append(temp4);
            $('.humidity4').append(humidity4);

        });

    });

});