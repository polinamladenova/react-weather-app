import React, { useState } from "react";
import "./Weather.css";
import weather from "./scattered-clouds-icon.png";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: { weather },
      date: new Date(response.data.dt * 1000),
      time: "7:00",
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <span className="weather-app">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  className="city-enter-field"
                  type="text"
                  placeholder="Enter a city..."
                  autofocus="on"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <button type="submit" className="city-search-field">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <h2>
                <span>{Math.round(weatherData.temperature)}</span>
                <span className="units">
                  <a className="active" href="/">
                    °C
                  </a>
                  |<a href="/">°F </a>
                </span>
                <img
                  src={weather}
                  alt={weatherData.description}
                  className="weather-icon"
                />
              </h2>
              <br />
              <h3>
                <FormattedDate date={weatherData.date} />
              </h3>
              <h3>{weatherData.description}</h3>
              <br />
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <i className="fa-solid fa-droplet"></i>
                  <span className="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  <i className="fa-solid fa-wind"></i>
                  <span> {weatherData.wind}</span> km/h
                </li>
              </ul>
            </div>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            6-Day Forecast
          </button>
          <div></div>
        </span>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossorigin="anonymous"
        ></script>
        <script src="index.js"></script>
      </div>
    );
  } else {
    const apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
