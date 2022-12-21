// import logo from './logo.svg';
<<<<<<< HEAD
=======
import './App.css';
>>>>>>> 1f4e813939b4fbbefa24f5baa9b4ae2fa7ca758b
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Home from "./Home"
import Layout from './Layout'
import Matching from './pages/Matching'
<<<<<<< HEAD
import Welcome from './pages/Welcome'
=======
>>>>>>> 1f4e813939b4fbbefa24f5baa9b4ae2fa7ca758b

export default function App(){
  return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
<<<<<<< HEAD
                <Route index element={<Welcome/>}/>
=======
                <Route index element={<Home/>}/>
>>>>>>> 1f4e813939b4fbbefa24f5baa9b4ae2fa7ca758b
                <Route path="/matching" element={<Matching />} /> 
            </Route>
        </Routes>
    </BrowserRouter>
<<<<<<< HEAD
    
=======
>>>>>>> 1f4e813939b4fbbefa24f5baa9b4ae2fa7ca758b
  )
}

// export default App;
