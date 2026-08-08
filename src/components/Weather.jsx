import { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState({
    temperature: 27,
    condition: "Clear Sky",
    location: "Your Location",
    humidity: 64,
    wind: 12
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="weather-component weather-loading">

        <div className="weather-spinner"></div>

        <span>
          Loading weather...
        </span>

      </div>
    );
  }

  return (
    <div className="weather-component">

      <div className="weather-header">

        <div>
          <span className="card-label">
            WEATHER
          </span>

          <h3>
            {weather.location}
          </h3>
        </div>

        <div className="weather-icon">
          ☀️
        </div>

      </div>

      <div className="weather-main">

        <div className="temperature">
          {weather.temperature}
          <sup>°C</sup>
        </div>

        <div className="condition">
          {weather.condition}
        </div>

      </div>

      <div className="weather-details">

        <div className="weather-detail">
          <span>💧</span>
          <div>
            <small>Humidity</small>
            <strong>
              {weather.humidity}%
            </strong>
          </div>
        </div>

        <div className="weather-detail">
          <span>💨</span>
          <div>
            <small>Wind</small>
            <strong>
              {weather.wind} km/h
            </strong>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Weather;