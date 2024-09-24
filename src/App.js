import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Tree from './pages/Tree';
import Industry from './pages/Industry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tree />} />
        <Route path="/industry" element={<Industry />} />
      </Routes>
    </Router>
  );
}

export default App;