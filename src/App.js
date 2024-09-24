import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Tree from './pages/Tree';
import Industry from './pages/Industry';
import Talk from './pages/Talk';
import Apresentation from './pages/Apresentation';
import Project from './pages/Project';
import Conclusion from './pages/Conclusion';
import Pwbi from './pages/Pwbi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tree />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/talk" element={<Talk />} />
        <Route path="/apresentation" element={<Apresentation />} />
        <Route path="/project" element={<Project />} />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="/pwbi" element={<Pwbi />} />
      </Routes>
    </Router>
  );
}

export default App;