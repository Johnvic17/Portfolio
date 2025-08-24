//library
import {BrowserRouter, Routes, Route} from "react-router-dom";

//CSS
import './App.css'

//sections
import Home from './sections/MainPage/Home'

//components
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
