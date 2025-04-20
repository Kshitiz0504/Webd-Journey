
// useRef -> 1.)Focusing on an Input Box
//           2.) reference to a value , such that when you change the value, the component Doesnot re-render



  // 1.
  // import { useRef, useState } from 'react'
  // import './App.css'

  // function App() {
  //   const inputRef = useRef();

  //   function focusOnInput() {
  //     // document.getElementById("name").focus();     // can be done by this also but DOM manipulation ni krna react use krna h 
  //     inputRef.current.focus();
  //   }

  //   return <div>
  //     Sign up
  //     <input ref={inputRef} type={"text"}></input>
  //     <input type={"text"}></input>
  //     <button onClick={focusOnInput}>Submit</button>
  //   </div>
  // }

  // export default App


  // 2.
  import { useRef, useState } from 'react'
  import './App.css'
  // a clock with a start and stop button
    function App() {
      const[currentCount, setCurrentCount] = useState(1);
      const timer = useRef();

      function startClock() {
        let value = setInterval(function() {
          setCurrentCount(c => c+1);
        }, 1000);
        timer.current = value;
      }

      function stopClock() {
        console.log(timer);
        clearInterval(timer.current);
      }

      return <div>
        {currentCount}
        <br />
        <button onClick={startClock}> Start </button>
        <button onClick={stopClock}> Stop </button>
      </div>
    }


    export default App


// ErrorBoundary

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   return (
//     <div>
//       <ErrorBoundary>
//         <Card1/>
//       </ErrorBoundary>
//         <Card2/>
//     </div>
//   );
// };

// function Card1() {

//   throw newError("Error while rendering")

//   return <div style={{background: "red", borderRadius: 20, padding: 20}}>
//     Hi there!
//   </div>
// }

// function Card2() {
//   return <div style={{background: "red", borderRadius: 20, padding: 20}}>
//     Hello
//   </div>
// }

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.error("Error caught:", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div style={{background: "red", borderRadius: 20, padding: 20}}>
//         Something went wrong
//         </div>
//     }

//     return this.props.children
//   }
// }

// export default App;


// Understanding Children

// function App() {

//   return <div style={{display: "flex", background: "gray"}}>
//     <Card>
//       <div style={{color: "green"}}>
//         What do you want to post <br/> <br/> <input type = {"text"} />
//       </div>
//     </Card>
//     <Card>
//       Hi there
//     </Card>
//   </div>
// }

// function Card({ children}) {
//   return <div style={{background: "white", borderRadius: 10, color: "black", padding: 10, margin: 10}}>
//     {children}
//     </div>
// }


// export default App