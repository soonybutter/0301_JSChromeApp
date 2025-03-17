const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "81a9cd6f19fab883aeb1f59ede0a61b6";

//success 함수
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
 
    //URL을 fetch하고, 그 다음에 response로 받아야함.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

//error 함수
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

//user의 geolocation정보를 주는 function
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);