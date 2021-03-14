import React, { useEffect, useState } from "react";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import "./styles.css";
import About from "../../features/About";
import { AboutData } from "../data/data";
import Skills from "../../features/Skills";
import Loading from "../components/Loading";
//TODO: Avatar design to change
//Footer
//Loading
//Portfolio

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero heroProps={AboutData} />
          <About aboutProps={AboutData} />
          <Skills />
        </>
      )}
    </>
  );
};

export default App;
