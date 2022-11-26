// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Home from "./Home"
import Layout from './Layout'
import Matching from './pages/Matching'

export default function App(){
  return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/matching" element={<Matching />} /> 
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

// export default App;
