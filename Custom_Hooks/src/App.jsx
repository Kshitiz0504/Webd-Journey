// Creating A Custom Hook ->
// Start with a 'use' Prefix
// and it should use another Hook

// import { useState } from 'react'
// import './App.css'


// // custom hook -> Basically a function that starts with a use
// and uses another hook and then returns some value 
// which changes as per the logic

// function useCounter() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count + 1);
//   }

//   return {
//     count: count,
//     increaseCount: increaseCount
//   }
// }

// function App() {

//   const {count, increaseCount} = useCounter();

//   return (
//     <div>
//       <button onClick={increaseCount}> Increase {count} </button>


//     </div>
//   )
// }

// export default App


 // Some of the Custom Hooks ->
 // 1.) useFetch -> It is used to fetch the urls


// import { useState , useEffect } from 'react'
// import './App.css'

// Without using useFetch Custom Hook

// function App() {
//   const [post, setPost] = useState( {} );

//   async function getPosts() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const json = await response.json();
//     setPost(json);
//   }

//   useEffect(() => {
//     getPosts();
//   }, [])

//   return (
//     <div>
//       {post.title}
//     </div>
//   )
// }

// export default App

// using useFetch Hook -> It is defined in a separate folder(hooks), we are using it from  there

// import { useState, useEffect } from 'react'
// import './App.css'
// import { useFetch, usePostTitle } from './hooks/useFetch'

// function App() {
//   const [currentPost, setCurrentPost] = useState(1);
//   const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

//   if (loading) {
//     return <div>
//       Loading...
//     </div>
//   }

//   return (
//     <div>
//       <button onClick={() => setCurrentPost(1)}>1</button>
//       <button onClick={() => setCurrentPost(2)}>2</button>
//       <button onClick={() => setCurrentPost(3)}>3</button>
//       {JSON.stringify(finalData)}
//     </div>
//   )
// }

// export default App


// 2.) usePrev -> It is used to access the previous value of the state variable


// import { useState } from "react";
// import "./App.css";
// import { usePrev } from "./hooks/usePrev";

// function App() {
//     const [state, setState] = useState(0);
//     const prev = usePrev(state);  // 0 -> initially it gets called with zero
//     // so ref will just be initialized to zero and kuki react first returns then uses effect iski phle previous value(in this case undefined) will be returned and then after that effect will come into use and return 0 to ref.current
//     // refs dont re-render when they change
    
    
//     return (
//       <>
//         <p> {state} </p>
//         <button onClick={() => { setState((curr) => curr + 1);}}>
//           Click Me
//         </button>
//           <p> The previous value was {prev}</p>
//       </>
//     );
// }

// export default App; 

// 3.) useDebounce -> Sending too much request to the backend is a bad practice
// eg. while using amazon if we are trying to search anything and keep on typing continuosly and very quickly
// it waits for some tym and let us complete typing and then shows the results

// a.

import {useRef} from "react"
import "./App.css";

function useDebounce(originalFn) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, 200);
  }

  return fn

}

function App() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend)

  return (
    <>
      <input type="text" onChange={debouncedFn}></input>
    </>
  );

}

export default App


// b.
// import { useEffect, useRef, useState } from "react";
// import "./App.css";

// const useDebounce = (value , delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }

// function App() {
//   const [inputVal, setInputVal] = useState("");
//   const debouncedValue = useDebounce(inputVal, 200)

//   function change(e) {
//     setInputVal(e.target.value)
//   }

//   useEffect(() => {
//     // expensive operation
//     // fetch
//     console.log("expensive operation");
//   }, [debouncedValue])


// return (
//   <>
//     <input id="input" type="text" onChange={change}></input>
//   </>
// )
// }
// export default App

