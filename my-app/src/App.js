import React from 'react';
import Home from "./routers/Home";
import About from "./routers/About";
import Project from "./routers/Project";
import Contact from "./routers/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
    style={{
      backgroundColor: '#ffffff',
      color: '#000000',
      minHeight: '100vh',
    }}
  >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}



export default App;
