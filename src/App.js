import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import ReactInfoHeader from './Component/ReactInfo/ReactInfoHeader';
import AirbnbHome from './Component/Airbnb/AirbnbHome';
import FacebookHome from './Component/Facebook/FacebookHome';

const App = () => {
  return <>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/project/react-info" element={<ReactInfoHeader/>}></Route>
            <Route path="/project/airbnb" element={<AirbnbHome/>}></Route>
            <Route path="/project/facebook" element={<FacebookHome/>}></Route>
        </Routes>
    </BrowserRouter>
  </>
}

export default App
