
import { useState, useEffect } from 'react';
import './App.css';
import { weatherToImg } from './WeatherImage';
import '@fontsource/poppins';
import '@fontsource/roboto';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = () => {
    const API_KEY = '82a11b043c133b03bed02933c669fa91';
    if (!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((json) => {
        setWeatherData(json);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setWeatherData(null);
      });
  };

    useEffect(() => {
    fetchWeather();
    console.log(weatherToImg)
  }, []);

  const WeatherImage = ({ weatherCondition }) => {
    const weatherType = weatherCondition.toLowerCase().replace(/\s/g, '');
    const imagePath = weatherToImg[weatherType];

    return (
      <div>
        {imagePath ? (
          <img src={imagePath} alt="weather visual" height="130px" width="150px" />
        ) : (
          <p style={{ fontSize: 20 }}>No image available</p>
        )}
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("https://github.com/Gaurav-99/Weather-Mini/blob/main/public/img/weatherbg.jpg?raw=true")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '105vh',
          width: '100vw',
          position: 'absolute',
          top: 0,
          left: 0,
          filter: "blur(5px)",
          zIndex: -1,
        }}
      />

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "12px 20px",
        fontFamily: "Poppins, sans-serif",
        color: "#1E1F2F",
        height: "100vh"
      }}>
        <h1 style={{
          fontSize: 60,
          fontWeight: "800",
          color: "#0D3B66",
          textAlign: "center",
        }}>
          Weather Forecast
        </h1>

        <form
          onSubmit={(e) => { e.preventDefault(); fetchWeather(); }}
          style={{
            marginTop: 30,
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            style={{
              fontSize: 24,
              padding: "12px 20px",
              borderRadius: 10,
              border: "1px solid #20C997",
              fontFamily: "Roboto, sans-serif",
              color: "#333",
              backgroundColor: "#F2F4F8",
              width: 300,
              textAlign: "center",
            }}
            placeholder="Enter Your City"
            type="search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#00BFFF",
              color: "#fff",
              fontSize: 20,
              fontWeight: "600",
              padding: "12px 24px",
              border: "none",
              borderRadius: 10,
              fontFamily: "Roboto, sans-serif",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Get Weather
          </button>
        </form>

        {weatherData && (
          <div style={{
            backgroundImage: 'url("https://github.com/Gaurav-99/Weather-Mini/blob/main/public/img/weatherbg.jpg?raw=true")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            marginTop: 40,
            backgroundColor: "rgba(16, 135, 186, 0.8)",
            padding: "20px",
            borderRadius: 10,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            textAlign: "center",
            maxWidth: 600,
            fontFamily: "Roboto, sans-serif",
            color: "#1E1F2F"
          }}>
            <h2 style={{ color: "brown", fontSize: 36 }}>{weatherData.name}, {weatherData.sys.country}</h2>
            <br/>
            <p style={{ fontSize: 24, color: "red" }}>🌡 Temperature: {weatherData.main.temp}°C</p>
            <p style={{ fontSize: 24, color: "blue" }}>💧 Humidity: {weatherData.main.humidity}%</p>
           
            <p style={{ fontSize: 24, color: "#410445"}}>🧭 Pressure: {weatherData.main.pressure} HPa</p>
            <p style={{ fontSize: 24, color:"#18230F" }}>🌤 Weather: {weatherData.weather[0].description}</p>
            <div style={{ marginTop: 20 }}>
              <WeatherImage weatherCondition={weatherData.weather[0].description} />
            </div>
          </div>
        )}

        {error && (
          <p style={{
            marginTop: 40,
            fontSize: 28,
            color: '#102E50',
            fontWeight: 600,
            textAlign: "center"
          }}>
            Error: {error.message}
          </p>
        )}
      </div>
    </>
  );
}

export default App;

