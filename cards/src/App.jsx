import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./Home";

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element= {<About />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Categories />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
