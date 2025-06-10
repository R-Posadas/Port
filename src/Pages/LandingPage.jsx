import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Services from "./Services";  
import MyWork from "./MyWork";
import Skills from "./Skills";
import Contact from "./Contact";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>
      
      <div id="services">
        <Services />
      </div>

      <div id="myWork">
        <MyWork />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact">
        <Contact />
      </div>

    </>
  );
}
