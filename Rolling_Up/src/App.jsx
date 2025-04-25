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


// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [bulbOn, setBulbOn] = useState(true);

//   return <div>
//     <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
//   </div>
// }

// function Light({bulbOn, setBulbOn}) {


//   return <div>
//     <LightBulb bulbOn={bulbOn} />
//     <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
//   </div>
// }

// function LightBulb({bulbOn}) {
//   return <div>
//     {bulbOn ? "Bulb on" : "Bulb off"}
//   </div>
// }

// function LightSwitch({bulbOn, setBulbOn}) {

//   function toggle() {
//     // setBulbOn(currentState => !currentState)
//     // or

//     // setBulbOn(function(currentState) {
//     //   if (currentState == true) {
//     //     return false;
//     //   }
//     //   else{
//     //     return true;
//     //   }
//     // })
//     // or
    
//     setBulbOn(!bulbOn)
//   }
//   return <div>
//     <button onClick={toggle}> Toggle The Bulb</button>
//   </div>
// }

// export default App


// Context API  -> The context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components. It provides a way to share values(state, functions, etc.) between components without having to pass down props manually at every level.

import { useState, createContext, useContext } from 'react'
import './App.css'

const BulbContext = createContext();    // defining the context

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    { children}
  </BulbContext.Provider>
}

function App() {

  return <div>
    <BulbProvider>     
      {/*  providing the value that you want the children to have */}

      <Light />
    </BulbProvider>
  </div>
}

function Light() {

  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);    // consume the context
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"} 
  </div> 
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext); 

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

