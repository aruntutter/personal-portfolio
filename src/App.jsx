import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Animated Cursor */}
      <div className="max-[1200px]:hidden animated-cursor">
        <AnimatedCursor
          color="252, 69, 29"
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            "img",
          ]}
        />
      </div>
    </Router>
  );
};

export default App;
