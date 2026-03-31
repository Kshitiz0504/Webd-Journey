
import './App.css'

function App() {
  
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

        {/* Responsiveness in Tailwind is Mobile First */}
        {/* Breakpoints -> Unprefixed utilities(iss case me sm is the prefix) take effect on all screen sizes, mtlb sm: ke just baad vla full screen ke liye h aur uske baad vla breakpoints pe */}
        {/* jaise iss case me normally blue rhega pr breakpoint pe red */}
        {/* Generalized -> prefix: property1 property2 -> This means that property1 will be executed for all >types and property2 will be executed for types below */}

      {/* <div className = 'sm:bg-blue-300 bg-red-300'>   -> This means that small screen size se lekar full size tk blue rhega aur small size se neeche pe red rhega
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
      <div className="bg-green-300 text-red-500 text-xs rounded">      // Tailwind me color set bhi krskte under tailwind.config.js under theme section
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
