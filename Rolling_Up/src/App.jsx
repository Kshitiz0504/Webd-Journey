// Rolling Up the State

// import { useState } from 'react'
// import './App.css'

// function App() {
//   return <div>
//     <LightBulb />
//   </div>
// }

// function LightBulb() {
//   const [bulbOn, setBulbOn] = useState(true);

//   // bulbOn is a prop to the Bulb State component
//   // setBulbOn is the prop to the ToggleBulbState component 
//   return <div>
//     <BulbState bulbOn={bulbOn} />
//     <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
//   </div>
// }

// function BulbState({bulbOn}) {
//   return <div>
//     {bulbOn ? "Bulb on" : "Bulb off"}
//   </div>
// }

// function ToggleBulbState({setBulbOn}) {
//   function toggle() {
//     // setBulbOn(currentState => !currentState)
//     // or
//     setBulbOn(function(currentState) {
//       if (currentState == true) {
//         return false;
//       }
//       else{
//         return true;
//       }
//     })
//   }
//   return <div>
//     <button onClick={toggle}> Toggle The Bulb</button>
//   </div>
// }

// export default App


// Prop Drilling -> It occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree.


import { useState } from 'react'
import './App.css'

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return <div>
    <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function Light({bulbOn, setBulbOn}) {


  return <div>
    <LightBulb bulbOn={bulbOn} />
    <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function LightBulb({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function LightSwitch({bulbOn, setBulbOn}) {

  function toggle() {
    // setBulbOn(currentState => !currentState)
    // or

    // setBulbOn(function(currentState) {
    //   if (currentState == true) {
    //     return false;
    //   }
    //   else{
    //     return true;
    //   }
    // })
    // or
    
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}> Toggle The Bulb</button>
  </div>
}

export default App
