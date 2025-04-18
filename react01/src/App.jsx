import { useState } from "react";
function App() {
  return (
    <div style={{backgroundColor: "#dfe6e9", height: "100vh"}}>
      <ToggleMessage />
      <Notifications />
      </div>
  )
}


const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);   // defining a new state variable
  // when the value of a state changes, 
  // the component that uses the state variable re-renders

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};


const Notifications = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  console.log("re-render");
  function increment() {
    setNotificationCount(notificationCount + 1);
  }

  return(
    <div>
      <button onClick={increment}>
        Notifications
      </button>
      {notificationCount}
    </div>
  );
};

// <div style={{display: "flex", justifyContent: "center"}}>
// <div>
//   <div>
//     <PostComponent
//       name={"harkirat"}
//       subtitle={"20 Folllowers"}
//       time={"2min ago"}
//       image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
//       description={"Want to know how to win big? CHeck out how these folks won $6000 in bounties."}
//       />
//     <br />
//   </div>
//     <div>
//       <PostComponent
//       name={"raman"}
//       subtitle={"Promoted"}
//       image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
//       description={"How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed to get a job"}
//       />
//       <br />
//     </div>
//     <div>
//       <ProfileCard/>
//       <br />
//     </div>
// </div>
// </div>
// </div>
// )
// const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}

// function PostComponent({name, subtitle, time, image, description}) {
//   return <div style={style}>
//   <div style={{display: "flex"}}>
//     <img src={image} style={{
//       width: 30,
//       height: 30,
//       borderRadius: 20
//     }} />
//     <div style={{fontSize: 10, marginLeft: 10}}>
//       <b>
//         {name}
//       </b>
//       <div>{subtitle}</div>
//       {(time !== undefined) ? <div style={{display: 'flex'}}>
//       <div>{time}</div>
//       <img src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612*612&w=0&k20&c=I8EBJl6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas=" style={{width: 12, height: 12}} />
//     </div> : null}
//   </div>
//   </div>
//   <div style={{fontSize: 12}}>
//     {description}
//   </div>
// </div>
// }

// const Greeting = ({ name}) => {
//   return <h1> Hello, {name}!</h1>;
// };

// function ProfileCard() {
//   return <div style={{width: 200, backgroundColor: "white", borderRadius: 30, borderColor: "gray", borderWidth: 1, padding: 20}}>
//     <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
//     <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
//       width: 50,
//       height: 60,
//       borderRadius: 20,
      
//     }} />
//     </div>
//     <div style={{fontSize: 20, textAlign: "center"}}>
//       <b>
//         Harkirat Singh
//       </b>
//     </div>
//     <div style={{fontSize: 15, textAlign: "center"}}>
//       Working As A FreeLancer
//     </div>
//     <div style={{fontSize: 10, textAlign: "center"}}>
//       Profile Views: 10064
//       <br/>
//       Profile Visits: 50000
//     </div>

//   </div>
 
// }

export default App