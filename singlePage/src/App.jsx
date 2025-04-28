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
        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911428/wpslqk3e1lpalk1hsqid.webp?_upload_ref=ic_img_tool&__ar__=1.78"
        style={{
          width: 300,
          height: 300,
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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZkRkyPk2h2-a81vkDetQU4ufVRAXlykZGA&s"
        style={{
          width: 250,
          height: 250,
          borderRadius: 20
        }}
        />
        
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdIQIRafxDTKOv1p2DRjutWcwmQdlrBcGrpg&s"
        style={{
          width: 250,
          height: 250,
          borderRadius: 20
        }}
        />
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRrC33UejjnkUnAvHWm7p03koW5uBzuniVg&s"
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