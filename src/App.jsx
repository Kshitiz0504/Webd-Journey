import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Coin from './pages/Coin/Coin'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/coingecko'); // calls your serverless function
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error("Failed to fetch from serverless function:", err);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
