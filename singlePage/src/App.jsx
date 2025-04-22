import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom" 

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/allen.in/" element={<LandingPage />} />
        <Route path="/allen.in/courses" element={<Courses />} />
        <Route path="/allen.in/online-test-series" element={<TestSeries />} />
        <Route path="/allen.in/results-2025" element={<Results />} />
        <Route path="/allen.in/study-materials" element={<StudyMaterial />} />
        <Route path="/allen.in/more" element={<More />} />
        <Route path="/allen.in/home-demo" element={<TalkToUs />} />
        <Route path="/allen.in/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </div>
}



function Layout() {
  return <div style={{backgroundColor: "#020024", color: "white", fontSize: 20}}>
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <div style={{display: "flex", justifyContent: "left", gap: 20, color: "white", padding: 10}}>
        <Link to="/allen.in"> <b>Allen</b> </Link>
        
        <Link to="/allen.in/courses"> Courses</Link>
        
        <Link to="/allen.in/online-test-series"> Test Series</Link>
        
        <Link to="/allen.in/results-2025"> Results</Link>
        
        <Link to="/allen.in/study-materials"> Study Materials</Link>
        
        <Link to="/allen.in/more"> More</Link>
      </div>
        <div style={{display: "flex", justifyContent: "end", gap: 30, padding: 10}}>
          <Link to="/allen.in/home-demo"> Talk to Us</Link>
          <Link to="/allen.in/login"> Login</Link>
        </div>
    </div>
  
    
    <div style={{display: "flex", color: "white", padding: 10}}>
      <Outlet />
      <div style={{display:'flex', flexDirection: "column", justifyContent: "left", padding: 20}}>
        Home  - Online Programs
        <br />
        <h2>Online Programs</h2>
        <div style={{fontSize:15, textAlign: 'left'}}>
        <p>
          To get the full Allen learning Experience, explore the Ultimate Series of Programs for JEE, NEET and Olympiads. The ultimate Programs are Allen Recommended. They provide a fully structured curriculum with a week-by-week plan and foster meaningful teacher-student inteeractions. These programs odder a personalized study experience,guiding you throughout your journey on where to concentrate your efforts. 
        </p>
        </div>
        
      </div>
      <div style={{padding:30}}>
        <img 
        src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-2a10-61f7-a83f-34f480532c7e/raw?se=2025-04-22T14%3A01%3A29Z&sp=r&sv=2024-08-04&sr=b&scid=648bf808-c4a7-55ca-89d1-16162639fb85&skoid=365eb242-95ba-4335-a618-2c9f8f766a86&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-22T04%3A44%3A10Z&ske=2025-04-23T04%3A44%3A10Z&sks=b&skv=2024-08-04&sig=GUjrUx3ipfpn2XCOv8l91MYqNoCBuAbDZt9lMgc7WSM%3D"
        style={{
          width: 200,
          height: 200,
          borderRadius: 20,
        }}
        />
        </div>
      
    </div>
    <div style={{color: "white", display: "flex", flexDirection: "column", justifyContent: "left", marginLeft: 50}}>
      <h3>
        Discover the perfect online programs
      </h3>
      <div style={{display: "flex", padding: 30, gap: 20}}>
       
        <img 
        src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-9dbc-61f8-ba91-97b40d299e61/raw?se=2025-04-22T13%3A24%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=f25bd379-3c80-52eb-b42d-64b2975168a5&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-22T04%3A33%3A17Z&ske=2025-04-23T04%3A33%3A17Z&sks=b&skv=2024-08-04&sig=%2BGfCpJl2RdLQYjifuA8cfNUlhC68RAXu5xZKfglV8fQ%3D"
        style={{
          width: 250,
          height: 250,
          borderRadius: 20
        }}
        />
        
        <img 
        src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-4e64-61f8-9ae2-f2d4cefbc116/raw?se=2025-04-22T13%3A29%3A44Z&sp=r&sv=2024-08-04&sr=b&scid=f8d94ba3-5a82-58ea-a422-de156f238732&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-22T04%3A33%3A46Z&ske=2025-04-23T04%3A33%3A46Z&sks=b&skv=2024-08-04&sig=XEj9UG5IT%2BjNHegiDBcdQN/RVgYoDB30vyIo6Z4OUvM%3D"
        style={{
          width: 250,
          height: 250,
          borderRadius: 20
        }}
        />
        <img 
        src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-2eb4-61f8-85c4-2a11c1fcee99/raw?se=2025-04-22T13%3A31%3A42Z&sp=r&sv=2024-08-04&sr=b&scid=6a9e10ff-e200-5a44-a2a8-b07f473518e2&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-22T04%3A30%3A07Z&ske=2025-04-23T04%3A30%3A07Z&sks=b&skv=2024-08-04&sig=m1ojsEnkgBL0VLGSU5scG1V32vAur4ZPED7Fx7NTRLA%3D"
        style={{
          width: 250,
          height: 250,
          borderRadius: 20,
        }}
        />
        </div>

    </div>
    
  </div>

}



function LandingPage() {
  return <div style={{backgroundColor: "white"}}>
    Welcome To Allen!!
  </div>
}
function Courses() {
  return <div>
    <ul>
      <li>JEE</li>
      <li>NEET</li>
      <li>CLass 10</li>
      <li>Class 12</li>
    </ul>
  </div>
}
function TestSeries() {
  return <div>
    Search for your required test series
  </div>
}
function Results() {
  return <div>
    Here's your Performance analysis! Best of Luck
  </div>
}
function StudyMaterial() {
  return <div>
    Use best resources for better results
  </div>
} 
function More() {
  return <div>
    More
  </div>
}
function TalkToUs() {
  return <div>
    Contact info of some of the Allen employees
  </div>
}
function Login() {
  return <div>
    <button input="text">Login</button>
  </div>
}
function ErrorPage() {
  return<div>
    Error while loading
  </div>
}

export default App