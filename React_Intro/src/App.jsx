import { useState, useEffect } from 'react'
import './App.css'

function App() {

  let [counterVisible, setCounterVisible] = useState(true);

  {/* // Conditional Rendering -
    // It means that we want to render a specific component 
    // as per a condition */}
    // Here we are trying to conditionally render the setCounterVisible
    // which shows that after every 5 secs counterVisible which is
    // already set to be true is changed to false due to which after 
    // 5 secs no counter increment part will be visible

    useEffect(function() {
      setInterval(function() {
        setCounterVisible(c => !c)
      }, 5000)
    }, [])

  return <div>
    h1
    {counterVisible ? <Counter></Counter> : null}
    hello
  </div>
}

  // setInterval
  // mounting, re-rendering, unmounting
  function Counter() {
    const [count, setCount] = useState(0);

    // setInterval(function() {
    // setCount(count + 1);
    // }, 1000)     // re-rendering of component -> to fix use { useEffect }


    // guard our setInterval from re-renders
    useEffect(function() {
      console.log("on mount");  // this gets consoled only 1 time due to useEffect 
      let clock = setInterval(function() {
        console.log("from inside setInterval");   // it gets consoled each time every second due to setInterval
      setCount(count => count + 1);
      }, 1000);

      // clean up when component unmounts
      return function() {
        console.log("on unmount");    // after every 5 sec, when the setCounterVisibile turns false, it unmounts. 
        clearInterval(clock)
      }
    }, []);   // if the dependency array is vacant, we can't
    // use the stateVariable count without initializing it
    // either use count => count + 1 or [count]

  function increaseCount() {
    setCount(count + 1);
  }

  return <div>
    <h1 id = "text">{count}</h1>
    <button onClick={increaseCount}> Increase Count </button>
  </div>
}

export default App
