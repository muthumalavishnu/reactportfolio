import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from "./HomeScreen";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
