import { useState } from 'react'
import { Otp } from './components/Otp'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-blue-700'>
      <br /> <br /> <br /> <br />
      <Otp number={20} />
    </div>
  )
}

export default App
