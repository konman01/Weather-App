"use strict";

serachButton.addEventListener('click', searchWeather);


function searchWeather() {
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        alert('Please enter a city Name');
    }

    // Send the request to open weather map api to get the weather data
    var http = new XMLHttpRequest();
    var apiKey = '35290d1eb99b8e23db95c553ac37adb7';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid='+apiKey;
    var method = 'GET';

    http.open(method, url);

    // register Function to get the response from the API
    http.onreadystatechange = function () {
        
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            updateWeather(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something went wrong');
        }
    }

    http.send();

}

// Update DOM with the result
function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;
    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
}
