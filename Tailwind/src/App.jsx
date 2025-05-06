import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Flex - <div style = {{display: "flex", justifyContent: "center"}} */}
      {/* <div className = 'flex justify-between'>
        <div className = 'bg-blue-300'>Child1</div>
        <div className = 'bg-red-300'>Child2</div>
        <div className = 'bg-green-300'>Child3</div>
      </div> */}

      {/* Grid - */}
      {/* <div className = 'grid grid-cols-12'>
        <div className = 'bg-blue-300 col-span-4'>Child1</div>
        <div className = 'bg-red-300 col-span-6'>Child2</div>
        <div className = 'bg-green-300 col-span-2'>Child3</div>
      </div> */}

        {/* Breakpoints -> Unprefixed utilities(iss case me sm is the prefix) take effect on all screen sizes, mtlb sm: ke just baad vla full screen ke liye h aur uske baad vla breakpoints pe */}
        {/* jaise iss case me normally blue rhega pr breakpoint pe red */}

      {/* <div className = 'sm:bg-blue-300 bg-red-300'>
        hi there
      </div> */}
{/* 
      <div className = 'grid grid-cols-12'>
        <div className = 'col-span-12 sm:col-span-5 bg-blue-300'>
          Hi there from the first div
        </div>
        <div className = 'col-span-12 sm:col-span-5 bg-red-300'>
          Hi there from the second div
        </div>
        <div className = 'col-span-12 sm:col-span-2 bg-pink-300'>
          Hi there from the third div
        </div>
      </div> */}

      {/* With TAILWIND */}
      <div className="bg-green-300 text-red-500 text-xs rounded">
        Hi there from the first div
      </div>

      {/* Without TAILWIND */}
      {/* <div style={{background: "green", color: "red", fontSize: "12px", borderRadius: "4px"}}>
        Hi there from the first div
      </div>  */}
    </> 
  )
}

export default App
