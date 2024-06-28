
import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import PinPad from './components/PinPad';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pinpad" element={<PinPad />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  )
}

export default App