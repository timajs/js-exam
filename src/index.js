import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Main from './containers/MainContainer/MainContainer.jsx'
import Menu from './containers/MenuContainer/MenuContainer.jsx'
import Project from './containers/ProjectContainer/ProjectContainer.jsx'
import Stack from './containers/StackContainer/StackContainer.jsx'

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} >
    <Route path="" element={<Main/>}></Route>
    <Route path="menu" element={<Menu/>}></Route>
    <Route path="project" element={<Project/>}></Route>
    <Route path="stack" element={<Stack/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

