import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      {/* App */}
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>

      {/* Animated Cursor */}
      <div className="max-[1200px]:hidden">
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
    </>
  );
};

export default App;
