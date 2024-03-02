import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { app, auth } from './Firebase'; // Importing app and auth from Firebase
import 'firebase/auth'; // Importing Firebase Auth module

import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Userinfo from './Components/Userinfo/Userinfo';
import Calucalater from './Calucalater';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false); // Set loading to false when initialization is complete
    });
    return unsubscribe; // Cleanup function to unsubscribe from the listener
  }, []);

  // Render loading indicator if Firebase is still initializing
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Conditionally render Home page based on user authentication */}
        {user ? (
          <Route path="/" element={<Navigate to="/userinfo" />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/userinfo" element={<Userinfo />} />
        <Route path="/calucalater" element={<Calucalater />} />
      </Routes>
    </Router>
  );
}

export default App;