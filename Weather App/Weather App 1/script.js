const apiKey = "8ddcb3d22ace5dc03fce878a3afc650e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }
    else {
        var data = await response.json();
        const weather = data.weather[0].main;

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";



        if (weather == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (weather == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (weather == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (weather == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (weather == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (weather == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = 'none';

    }

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

    

});

const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

lightIcon.addEventListener("click", () => {
    document.body.classList.remove("dark");
});

darkIcon.addEventListener("click", () => {
    document.body.classList.add("dark");
});
