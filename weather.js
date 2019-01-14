const API_KEY = "b6884a2584190f6c6af49767e42fcd37"
const COORDS = "coords"
const weather = document.querySelector(".js-weather")


function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&appid=${API_KEY}&units=metric`
    ).then(
        function(response) {
            return response.json()
        }
    ).then(
        function(json) {
            const temperature = json.main.temp;
            const place = json.name
            console.log(temperature)
            console.log(place)
            weather.innerText = `${temperature}℃ / ${place}`
        }
    )

}
//then은 fetch이후 실행..
function saveCoords(coordObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordObj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordObj = {
        latitude: latitude,
        longitude: longitude
    }
    saveCoords(coordObj)
    getWeather(latitude, longitude)
}

function handleGeoError() {
    console.log("can't acees Geo location")
}




function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}
// getCurrentPosstion(성공시 실행, 실패시 실행)

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS)
    if (loadedCoords === null) {
        askForCoords()
    } else {
        const parsedCoords = JSON.parse(loadedCoords)
        console.log(parsedCoords)
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}


function init() {
    loadCoords()
}

init()