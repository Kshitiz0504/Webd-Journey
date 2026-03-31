import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom" 

function App() {
  return <div>
    // Setting the required routes 
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


  return <div style={{backgroundColor: "#020024", color: "white", fontSize: 15}}>
    <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
      <div style={{display: "flex", justifyContent: "left", gap: 20, color: "white", padding: 10, textDecoration:"none", flexWrap: "wrap"}}>
        <Link to="/allen.in" style={{textDecoration:"none", color:"white"}}> <b>Allen</b> </Link>
        
        <Link to="/allen.in/courses" style={{textDecoration:"none", color:"white"}}> Courses</Link>
        
        <Link to="/allen.in/online-test-series" style={{textDecoration:"none", color:"white"}}> Test Series</Link>
        
        <Link to="/allen.in/results-2025" style={{textDecoration:"none", color:"white"}}> Results</Link>
        
        <Link to="/allen.in/study-materials" style={{textDecoration:"none", color:"white"}}> Study Materials</Link>
      
        <Link to="/allen.in/more" style={{textDecoration:"none", color:"white"}}> More</Link>
      </div>
        <div style={{display: "flex", justifyContent: "end", gap: 40, padding: 10, flexWrap: "wrap"}}>
          <Link to="/allen.in/home-demo" style={{textDecoration:"none", color:"white"}}> Talk to Us</Link>
          <Link to="/allen.in/login" style={{textDecoration:"none", color:"white"}}> Login</Link>
        </div>
    </div>
  
    
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      color: "white",
      padding: 10,
      justifyContent: "center",
      gap: 20,
    }}>

  <div style={{
    display:'flex', 
    flexDirection: "column", 
    justifyContent: "flex-start", 
    padding: 20, 
    maxWidth: 500,
    flex: "1 1 300px",
  }}>
    <div>Home - Online Programs</div>
    <h2>Online Programs</h2>
    <p style={{fontSize: 15, textAlign: 'left'}}>
      To get the full Allen learning Experience, explore the Ultimate Series of Programs for JEE, NEET, and Olympiads...
    </p>
  </div>

  <div style={{
    padding: 20,
    maxWidth: 400,
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>
    <img 
      src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911428/wpslqk3e1lpalk1hsqid.webp?_upload_ref=ic_img_tool&__ar__=1.78"
      style={{
        width: "100%",
        maxWidth: "300px",
        height: "auto",
        borderRadius: 20,
      }}
      alt="Online Programs"
    />
  </div>

</div>


    <div style={{ 
      display: "flex", 
      flexWrap: "wrap", 
      gap: 20, 
      justifyContent: "center", 
      alignItems: "center", 
      padding: 30 
    }}>
      <div>
      <p> Discover the perfect Online Learning Platform </p>

      
    <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
    <div style={{ maxWidth: 250, width: "100%", textAlign: "center" }}>
      JEE <br />
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZkRkyPk2h2-a81vkDetQU4ufVRAXlykZGA&s"
        style={{
          width: "100%",
          height: 200,
          borderRadius: 20,
        }}
        alt="JEE"
      />
    </div>

    <div style={{ maxWidth: 250, width: "100%", textAlign: "center" }}>
      NEET <br />
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdIQIRafxDTKOv1p2DRjutWcwmQdlrBcGrpg&s"
        style={{
          width: "100%",
          height: 200,
          borderRadius: 20,
        }}
        alt="NEET"
      />
    </div>

    <div style={{ maxWidth: 250, width: "100%", textAlign: "center" }}>
      6-10 <br />
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRrC33UejjnkUnAvHWm7p03koW5uBzuniVg&s"
        style={{
          width: "100%",
          height: 200,
          borderRadius: 20,
        }}
        alt="6-10"
      />
    </div>
    </div>
    </div>

  </div>

    
  </div>

}



function LandingPage() {
  return <div style={{backgroundColor: "#020024", color: "white", height: "100vh", padding: 10}}>
   
      Welcome To Allen!!
    
  </div>
}
function Courses() {
  return <div style={{backgroundColor: "#020024", color: "white", height: "100vh", padding: 10}}>
    <ul>
      <li>JEE</li>
      <li>NEET</li>
      <li>Class 10</li>
      <li>Class 12</li>
    </ul>
  </div>
}
function TestSeries() {
  return <div style={{backgroundColor: "#020024", color: "white", height: "100vh", padding: 10}}>
    Search for your required test series
  </div>
}
function Results() {
  return <div style={{backgroundColor: "#020024", color: "white", height: "100vh", padding: 10}}>
    Here's your Performance analysis! Best of Luck
  </div>
}
function StudyMaterial() {
  return <div style={{backgroundColor: "#020024", color: "white", height: "100vh", padding: 10}}>
    Use best resources for better results
  </div>
} 
function More() {
  return <div style={{backgroundColor: "#020024", color: "white", height: "100vh", padding: 10}}>
    More
  </div>
}
function TalkToUs() {
  return <div style={{backgroundColor: "#020024", color: "white", height: "100vh", padding: 10}}>
    Contact info of some of the Allen employees
  </div>
}
function Login() {
  return <div style={{backgroundColor: "#020024", color: "white", height: "100vh", padding: 10, display: "flex", flexDirection: "column", gap: 20}}>
    Sign Up <br/>
    Login <br />
    
  </div>
}
function ErrorPage() {
  return<div style={{backgroundColor: "#020024", color: "white", height: "100vh", padding: 10}}>
    Error while loading
  </div>
}

export default App