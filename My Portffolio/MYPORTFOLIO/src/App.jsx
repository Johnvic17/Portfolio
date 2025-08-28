//library
import { BrowserRouter, Routes, Route } from "react-router-dom";

//sections
import Home from "./sections/MainPage/Home";
import About from "./sections/AboutMe/About";

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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
