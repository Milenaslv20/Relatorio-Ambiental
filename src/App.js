import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;