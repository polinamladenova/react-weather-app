import "./App.css";
import weather from "./scattered-clouds-icon.png";

export default function App() {
  let weatherData = {
    city: "Sofia",
    temperature: 24,
    date: "Sunday, 6 Aug 2023",
    time: "20:50",
    description: "Scattered clouds",
    humidity: 46,
    wind: 4.63,
  };
  return (
    <div className="App">
      <div className="container">
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
                <span>{weatherData.temperature}</span>
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
                {weatherData.date} | {weatherData.time}
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
        <br />
        <p className="credits">
          <a
            href="https://github.com/polinamladenova/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            {" "}
            SheCodes{" "}
          </a>
          student
          <a
            href="https://www.linkedin.com/in/polina-mladenova-387087a5/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Polina Mladenova
          </a>
        </p>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossorigin="anonymous"
        ></script>
        <script src="index.js"></script>
      </div>
    </div>
  );
}
