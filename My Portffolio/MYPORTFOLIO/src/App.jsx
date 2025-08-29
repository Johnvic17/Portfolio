//library
import { BrowserRouter, Routes, Route } from "react-router-dom";

//sections
import Home from "./sections/MainPage/Home";
import About from "./sections/AboutMe/About";
import TechStack from "./sections/TechStack/TechStack";
import Portfolio from "./sections/Portfolio/Portfolio";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";


//components
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }} // to avoid the warning message appearing
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/about" element={<About/>}/>
            <Route path="/techstack" element={<TechStack/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
