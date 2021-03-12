import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import "./styles.css";
import About from "../../features/About";
import { AboutData } from "../data/data";
import Skills from "../../features/Skills";
//TODO: Avatar in about to change 
        //Skills to finish
        //Skills part to
        //Footer
        //Loading 
        //Portfolio
const App = () => {
  return (
    <>
      <Navbar />
      <Hero heroProps={AboutData} />
      <About aboutProps={AboutData} />
      <Skills />
    </>
  );
};

export default App;
