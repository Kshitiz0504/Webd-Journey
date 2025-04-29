import { useState } from 'react'

import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const[error, setError] = useState(null);

  const fetchWeather = () => {
    const API_KEY = '82a11b043c133b03bed02933c669fa91';
    if (!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then((json) => {
        setWeatherData(json);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setWeatherData(null);
        console.error(err);
      });
  };


  return (
    <div style={{
      backgroundColor: "#03011C",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      
    
    }}>
      <div style={{
        fontSize: 40,
        fontFamily: "fantasy",
        padding: 20,
        display: "flex",
        gap: 10,
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        
      }}>

        <div>
          <img src="https://media.istockphoto.com/id/482423958/video/weather-icon-set-animation.jpg?s=640x640&k=20&c=GG-ga-WFpr8D-uPnuJYOnHTGa7TcH3RHWZoDpCTUWfI=" 
          style={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            height: 150,
            width: 250
          }} 
          />
        </div>

        Weather App


      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",
        padding: 10,
        flexWrap: "wrap",
      }}>

       <main style={{ marginTop: 20 }}>
        {weatherData && (
          <div>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        )}
        {error && <p style={{ color: 'red' }}> Error: {error.message} </p>}
      </main>
    </div>


    <div style={{
      color: "red",
      fontFamily: "monospace",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
      padding: 40,
      justifyContent: "center",
      alignItems: "center"
      
    }}>
      <form onSubmit={(e) => { e.preventDefault(); fetchWeather(); }} >
        <label htmlFor="city" style={{
          
        }}> Enter Your City </label>
        <input style={{
          backgroundColor: "#DB2525",
          color: "black",
          fontFamily: "monospace",
          fontSize: 10, 
          padding: 7
        }}
          type="search"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit"
        style={{
          color: "red",
          fontFamily: "monospace",
          display: "flex",
          flexDirection: "row",
          }}>Search</button>
      </form>
    </div>
  </div>
    
  )
}

export default App
