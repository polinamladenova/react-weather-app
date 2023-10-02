import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <h2>
            <WeatherTemperature celsius={props.data.temperature} />
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="weather-icon"
            />
          </h2>
          <br />
          <h3>
            <FormattedDate date={props.data.date} />
          </h3>
          <h3>{props.data.description}</h3>
          <br />
        </div>
        <div className="col-6">
          <ul>
            <li>
              <i className="fa-solid fa-droplet"></i>
              <span className="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              <i className="fa-solid fa-wind"></i>
              <span> {props.data.wind}</span> km/h
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
    </div>
  );
}
