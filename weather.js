"use strict";

let daysWeather = [
  { day: "Sunday", temperature: 60, rainfall: 0.2 },
  { day: "Monday", temperature: 55, rainfall: 0 },
  { day: "Tuesday", temperature: 63, rainfall: 0.3 },
  { day: "Wednesday", temperature: 57, rainfall: 0.25 },
];

let weatherTable = document.getElementById("weather-table");

daysWeather.forEach((day) => {
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let dayTD = document.createElement("td");
  let temperatureTD = document.createElement("td");
  let rainfallTD = document.createElement("td");
  dayTD.innerText = day.day;
  temperatureTD.innerText = day.temperature;
  rainfallTD.innerText = day.rainfall;
  tr.appendChild(dayTD);
  tr.appendChild(temperatureTD);
  tr.appendChild(rainfallTD);
  tbody.appendChild(tr);

  weatherTable.appendChild(tbody);
});

let sum = daysWeather.reduce((acc, curr) => {
  return acc + curr.temperature;
}, 0);

let averageTemp = sum / daysWeather.length;
let avgTempButton = document.getElementById("avgTemp");
avgTempButton.addEventListener("click", () => {
  let p = document.getElementById("avgTempResults");
  p.innerText = averageTemp;
});

let highestRain = 0;
daysWeather.forEach((day) => {
  if (day.rainfall > highestRain) {
    highestRain = day.rainfall;
  }
});

let maxRainButton = document.getElementById("maxRain");
maxRainButton.addEventListener("click", () => {
  let maxRainPerDay = document.getElementById("maxRainFall");

  maxRainPerDay.innerText = ("Highest Rain (forEach):", highestRain);
});
