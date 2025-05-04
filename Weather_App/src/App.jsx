import { useState, useEffect } from 'react'

import './App.css'
import { weatherToImg } from './WeatherImage';


function App() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const[error, setError] = useState(null);

  
  

  const Weather = () => {
    if (!weatherData) return null;
  
    const weatherCondition = weatherData.weather[0].description.toLowerCase();
  
    return (
      <div>
        <h1>Current Weather: {weatherCondition}</h1>
        <WeatherImage weatherCondition={weatherCondition} />
      </div>
    );
  };

  useEffect(() => {
    fetchWeather();
    console.log(weatherToImg)
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


  // const weatherImages = {
  //   clearsky2: 'path/to/clearsky2-image.png',
  //   rain: 'path/to/rain-image.png',
  //   overcastclouds: 'path/to/overcastclouds-image.g',
  //   brokenclouds: 'path/to/brokenclouds-image.png',
  //   fewclouds: 'path/to/fewclouds-image.png',
  //   scatteredclouds: 'path/to/scatteredClouds-image.png',
  //   mist: 'path/to/mist-image.png',
  //   showerrain: 'path/to/showerrain-image.png',
  //   thunderstorm: 'path/to/thunderstorm-image.png',
  // };
  
  const WeatherImage = ({ weatherCondition }) => {
    const weatherType = weatherCondition.toLowerCase().replace(/\s/g, '');
    const imagePath = weatherToImg[weatherType];
  
    return (
      <div>
        {imagePath ? (
          <img src={imagePath} height="100px" width="150px" />
        ) : (
          <p style= {{fontSize: 20}}>No image available</p>
        )}
      </div>
    );
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
      flexWrap: "wrap",
      padding: 20,
      opacity: 50,
      zIndex: -1,
      filter: "blur(1px)"
    }}>

    </div>
    
<div style={{
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  padding: 5,
  height: "100%",
  width: "100%",

}}>
  
    <h1 style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100%",
      width: "100%",
      textAlign: "center",
      color: "black",
      fontFamily: "Alumni Sans Pinstripe, sans-serif",
      fontWeight: 800,
      fontSize: 60,
      paddingTop: 20,
      }}>
        
      Weather Forecast

      </h1>

      <div style={{  
        paddingTop: 20,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-around",
        height: "100%",
        width: "100%",
      }}>

      

<main style={{ 
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
  fontSize: 50,
  textAlign: "center",
  height: "100%",
  width: "100%"
}}>

  <div style={{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontFamily: "Alumni Sans Pinstripe, sans-serif",
    fontWeight: 1000,
    fontStyle: "bold",
    textAlign: "center",
    gap: 60,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  }}>
      
    <form onSubmit={(e) => { e.preventDefault(); fetchWeather(); }} style={{
      display: "flex",
      gap: 10
    }}>
      <label htmlFor="city" style={{ 
        color: "black",
        fontFamily: "Alumni Sans Pinstripe, sans-serif",
        fontSize: 50,
        fontWeight: 1000,
        fontStyle: "bold",
        padding: 7
      }}></label>

        <input style={{
          fontFamily: "Alumni Sans Pinstripe, sans-serif",
          textAlign: "center",
          fontSize: 30,
          height: 70,
          weight: 40,
          fontWeight: 1000,
          fontStyle: "bold",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center", 
          padding: 7,
          borderRadius: 10,
          backgroundColor: "#F2F4F8",
          border: "1px solid #20C997", 
          color: "#1E1F2F",          
                      
        }}
          placeholder='Enter Your City'
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
          height: 70,
          weight: 40,
          fontFamily: "Alumni Sans Pinstripe, sans-serif",
          fontStyle: "bold",
          fontWeight: 1000,
          fontSize: 20,
          textAlign: "center",
          padding: 10,
          borderRadius: 15,
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

            <h1 style={{ color: "#00BFFF", fontSize: 40, fontstyle: "bold" }}> {weatherData.name}  </h1>
            <p style={{ color: "#000000", fontSize: 25, fontstyle: "bold"}}>Temperature: {weatherData.main.temp}°C</p>
            <p style={{ color:" #FFB347", fontSize: 25, fontstyle: "bold" }}>Visibility: {weatherData.visibility}</p>
            <p style={{ color: "#A4D4AE", fontSize: 25, fontstyle: "bold" }}>Humidity: {weatherData.main.humidity}</p>
            <p style={{ color: "#D3D3D3", fontSize: 25, fontstyle: "bold" }}>Pressure: {weatherData.main.pressure}</p>
            <p style={{ color: "#FFFFFF", fontSize: 25, fontstyle: "bold" }}>Country: {weatherData.sys.country}</p>
              
            <WeatherImage weatherCondition={weatherData.weather[0].description.toLowerCase()}/>

            <p style={{ color: "#20C997", fontSize: 25, fontStyle: "bold" }}>Weather: {weatherData.weather[0].description}</p>
            </div>
          
        )}
        {error && <p style={{ color: '#FF6B6B', fontSize: 50, alignItems: "center" }}> Error: {error.message} </p>}

        
      </main>
      </div>
      </div>

      </>
    
  )
}

export default App
