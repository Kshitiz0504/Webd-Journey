import { useState, useEffect } from 'react'

import './App.css'



function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const[error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);


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
    <>
    <div style={{
      backgroundImage: 'url("https://github.com/Gaurav-99/Weather-Mini/blob/main/public/img/weatherbg.jpg?raw=true")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: "100vw",
      position: "absolute",
      color: 'white',
      padding: 10,
      opacity: 50,
      zIndex: -1,
      filter: "blur(2px)"
    }}>

    </div>
    
<div style={{
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  height: "100%",
  width: "100%",

}}>
    <h1 style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "black",
      fontFamily: "Alumni Sans Pinstripe, sans-serif",
      fontWeight: 600,
      fontSize: 60
      }}>
        
      Weather Forecast

      </h1>
     

      <div style={{  
        padding: 10,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", 
      }}>

      </div>

<main style={{ 
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  fontSize: 15,
  textAlign: "center",
}}>

  <div style={{
    color: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontFamily: "Alumni Sans Pinstripe, sans-serif",
    fontWeight: 1000,
    fontStyle: "bold",
    textAlign: "center",
    gap: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  }}>
      
    <form onSubmit={(e) => { e.preventDefault(); fetchWeather(); }} >
      <label htmlFor="city" style={{ 
        color: "black",
        fontFamily: "Alumni Sans Pinstripe, sans-serif",
        fontSize: 30,
        fontWeight: 1000,
        fontStyle: "bold",
        padding: 7
      }}> Enter Your City:  </label>

        <input style={{
          height: 40,
          fontFamily: "Alumni Sans Pinstripe, sans-serif",
          textAlign: "center",
          fontSize: 20,
          height: 40,
          weight: 40,
          fontWeight: 1000,
          fontStyle: "bold", 
          padding: 7,
          borderRadius: 10,
          backgroundColor: "#F2F4F8",
          border: "1px solid #20C997", 
          color: "#1E1F2F",          
                      
        }}

          type="search"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit"
        style={{
          backgroundColor: "#00BFFF", 
          color: "#FFFFFF",         
          border: "none",           
          height: 40,
          weight: 40,
          display: "flex",
          fontFamily: "Alumni Sans Pinstripe, sans-serif",
          fontStyle: "bold",
          fontWeight: 1000,
          fontSize: 20,
          textAlign: "center",
          padding: 10,
          borderRadius: 15,
          opacity: 15
          }}> Get Your Weather </button>
      </form>
    </div>

        {weatherData && (
          <div style={{
            color: "#1E1F2F",
            padding: 20,
            fontWeight: 1000,
            fontFamily: "Alumni Sans Pinstripe, sans-serif",
            textAlign: "center",
            lineHeight: 1.8,
          }}>

            <h1 style={{ color: "#00BFFF", fontSize: 40 }}> {weatherData.name}  </h1>
            <p style={{ color: "#FFB347" }}>Temperature: {weatherData.main.temp}°C</p>
            <p style={{ color: "#20C997" }}>Weather: {weatherData.weather[0].description}</p>
            <p style={{ color: "#FFFFFF" }}>Visibility: {weatherData.visibility}</p>
            <p style={{ color: "#A4D4AE" }}>Humidity: {weatherData.main.humidity}</p>
            <p style={{ color: "#D3D3D3" }}>Pressure: {weatherData.main.pressure}</p>
            
          </div>
          
        )}
        {error && <p style={{ color: '#FF6B6B', fontSize: 25 }}> Error: {error.message} </p>}

        
      </main>
      </div>

      </>
    
  )
}

export default App
