import './App.css';
import React from 'react';
import { Navigate, Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';

let App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path='{/}' element ={<Navigate to={'/contact/list'}/>} />
        <Route path='{/contact/list}'/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
