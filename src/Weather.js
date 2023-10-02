import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import weather from "./scattered-clouds-icon.png";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: { weather },
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  function search() {
    const apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <span className="weather-app">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  className="city-enter-field"
                  type="text"
                  placeholder="Enter a city..."
                  autofocus="on"
                  autocomplete="off"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <button type="submit" className="city-search-field">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </span>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
