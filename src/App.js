import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Userinfo from './Components/Userinfo/Userinfo';
import Calucalater from './Calucalater';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        <Route path="/userinfo" element={<Userinfo />} />
        <Route path="/calucalater" element={<Calucalater />} />
      </Routes>
    </Router>
  );
}

export default App;