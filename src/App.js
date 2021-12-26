import './App.css';
import React from 'react'
import NavBar from './components/NavBar/NavBar.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet />
    </div>

  );
}

export default App;
