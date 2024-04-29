import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/pages/navbar'
import Landing from './components/pages/landing'
import Login from './components/pages/login'
import About from './components/pages/about'
import Home from './components/pages/home'
import ConnectionIndex from './components/pages/connectionIndex';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} ></Route>
          <Route path="/login" element={<Login/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/connections" element={<ConnectionIndex/>} ></Route>
        </Routes>
        <footer className="app-footer">&copy; 2024 - This is the footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
