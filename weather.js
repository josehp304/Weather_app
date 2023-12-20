const apiKey = "b3aab7a5a984c4f37a42c3e936b6fe0f";
const apiLink = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchbox = document.getElementById("city");
const btn = document.querySelector(".search button");
async function checkWeatherApp(city = "new york") {
  const result = await fetch(
    apiLink + city + `&units=metric` + `&appid=${apiKey}`
  );
  var data = await result.json();
  console.log(data);
  var temper = document.getElementById("temp");
  var city_name = document.querySelector(".weather h2");
  var humidity = document.querySelector(".humidity h1");
  var wind = document.querySelector(".wind h1");
  var icon = document.querySelector(".weather img");
  var icon_info = data.weather[0].main;
  if (icon_info == "Clear") {
    icon.src = "clear.png";
  } else if (icon_info == "Clouds") {
    icon.src = "clouds.png";
  } else if (icon_info == "Mist") {
    icon.src = "mist.png";
  } else if (icon_info == "Rain") {
    icon.src = "rain.png";
  } else if (icon_info == "Smoke") {
    icon.src = "smoke.png";
  }
  temper.innerHTML = data.main.temp + "°C";
  city_name.innerHTML = icon_info + "<br>" + data.name;
  humidity.innerHTML = "" + data.main.humidity + "%";
  wind.innerHTML = "" + Math.round(data.wind.speed * 3.6) + "km/h";
}
checkWeatherApp();

btn.addEventListener("click", () => {
  checkWeatherApp(searchbox.value);
});
