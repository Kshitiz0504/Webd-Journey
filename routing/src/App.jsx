
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>   // Layout one is the parent div in which other route are stored
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/neet/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      Footer | Contact Us
    </BrowserRouter>
  </div>
}

function Layout() {
  return <div style={{height: "100vh" }}>
    <Link to="/neet"> Allen </Link>
    |
    <Link to="/neet/online-coaching-class-11">Class 11</Link>
    |
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
    <div style={{height: "90vh"}}>
      <Outlet />
     </div>
   footer
  </div>
}

function ErrorPage() {
  return <div>
    Something went Wrong!! Try Again Later.
  </div>
}


function Landing() {
  return <div>
    Welcome To Allen!!
  </div>
}

function Class11Program() {
  return <div>
    NEET Programs for Class 11th
  </div>
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/neet/")
  }

  return <div>
    NEET Programs for Class 12th
    <button onClick={redirectUser}>Go back to Landing Page</button>
  </div>
}

export default App
