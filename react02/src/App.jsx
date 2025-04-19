// ErrorBoundary

import React, { useState, useEffect } from 'react';

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Card1/>
      </ErrorBoundary>
        <Card2/>
    </div>
  );
};

function Card1() {

  throw newError("Error while rendering")

  return <div style={{background: "red", borderRadius: 20, padding: 20}}>
    Hi there!
  </div>
}

function Card2() {
  return <div style={{background: "red", borderRadius: 20, padding: 20}}>
    Hello
  </div>
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{background: "red", borderRadius: 20, padding: 20}}>
        Something went wrong
        </div>
    }

    return this.props.children
  }
}

export default App;


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