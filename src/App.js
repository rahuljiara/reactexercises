import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import ReactInfoHeader from './Component/ReactInfo/ReactInfoHeader';
import AirbnbHome from './Component/Airbnb/AirbnbHome';
import FacebookHome from './Component/Facebook/FacebookHome';
import WindowHome from './Component/window11/WindowHome.js';
import WindowStartPage from './Component/window11/WindowStartPage'
import WindowFile from './Component/window11/WindowFile';


const App = () => {
  return <>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/project/react-info" element={<ReactInfoHeader/>}></Route>
            <Route path="/project/airbnb" element={<AirbnbHome/>}></Route>
            <Route path="/project/facebook" element={<FacebookHome/>}></Route>
            <Route path="/project/windows-11" element={<WindowHome/>}></Route>
            <Route path="/project/windows-11/start" element={<WindowStartPage/>}></Route>
            <Route path="/project/windows/files" element={<WindowFile/>}></Route>
        </Routes>
    </BrowserRouter>
  </>
}

export default App
