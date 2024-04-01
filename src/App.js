import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/pages/navbar'
import Login from './components/pages/login'
import About from './components/pages/about'
import Home from './components/pages/home'
import ConnectionIndex from './components/pages/connectionIndex';


function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/connections" element={<ConnectionIndex/>} ></Route>

    </Routes>
      <div className="App">
     
        <footer className="App-footer">&copy; 2024 - This is the footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
