window.onload = function() {
    weather.fetchWeather("Ashtarak")
};

let weather = {
        APIKEY:  "f423d309cdd8de1e4ff11860116d5edf",
        fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.APIKEY
        )
        .then((res) => res.json())
        .then((data) => this.displayWeather(data))
        .catch(err =>{
            alert("Please, input correctly")
        } )
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log( name, icon, description, temp, humidity, speed )
        document.querySelector(".card_header>h1").innerText = "Wheater in " + name;
        document.querySelector(".card_header>h2").innerText = Math.floor(temp) + "°C";
        document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".card_info>p").innerText = description;
        document.getElementById("humidity").innerText = "humidity: " + humidity + " %";
        document.getElementById("wind-speed").innerText = "wind speed: " + speed + " km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    }
}

function debounce (func, delay){

    let timeout
    return function (...args) {
        if(timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout( ()=> {
            func(...args)
        }, delay)
    }
}

search.addEventListener("keyup", debounce((e => {
    weather.fetchWeather(e.target.value)
    e.target.value = ""
}),1000))
