import React from 'react'
// import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/navbar'
import Home from './components/home';
import Connections from './components/pages/connections';


function App() {

  return (
    <div className="App">
      <Home fName="Kenti" lName='Johnson' home='New York' agent={false}/>
      <Connections/>
      <footer className="App-footer">&copy; 2024 - This is the footer</footer>
    </div>
  );
}

export default App;
