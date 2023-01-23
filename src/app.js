let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();
let day = days[now.getDay()];
let hour = now.getHours();
hour = hour <= 9 ? "0" + hour : hour;
let minutes = now.getMinutes();
minutes = minutes <= 9 ? "0" + minutes : minutes;

function displayTemperature(response) {
  console.log(response.data);
  let temperature = document.querySelector("#temperature");
  let city = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let date = document.querySelector("#date");
  let icon = document.querySelector("#icon");

  temperature.innerHTML = Math.round(response.data.temperature.current);
  city.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  date.innerHTML = `${day} ${hour}:${minutes}`;
  icon.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.condition.icon_url[0]}@2x.png`);
}

let apiKey = "86bfa0b913987f39af8002aa2oe74a1t";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=86bfa0b913987f39af8002aa2oe74a1t&units=metric`;

axios.get(apiUrl).then(displayTemperature);
