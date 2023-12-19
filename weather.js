const apiKey = "b3aab7a5a984c4f37a42c3e936b6fe0f";
const apiLink = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchbox = document.getElementById("city");
const btn = document.querySelector(".search button");
async function checkWeatherApp(city) {
  const result = await fetch(
    apiLink + city + `&units=metric` + `&appid=${apiKey}`
  );
  var data = await result.json();
  console.log(data);
  var temper = document.getElementById("t");
  var city_name = document.querySelector(".weather h2");
  var humidity = document.querySelector(".humidity h1");
  var wind = document.querySelector(".wind h1");
  var maintemp = data.main.temp;
  temper.innerHTML = maintemp;
  city_name.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity;
  wind.innerHTML = data.wind.speed;
}
checkWeatherApp();

btn.addEventListener("click", () => {
  checkWeatherApp(searchbox.value);
});
