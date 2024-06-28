
import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './pages/Home'
import PinPad from './components/PinPad';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/pinpad" element={<PinPad />} />
    </Routes>
  </Router>
  )
}

export default App