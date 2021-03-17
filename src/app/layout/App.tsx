import React, { useEffect, useState } from "react";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import "./styles.css";
import About from "../../features/About";
import { AboutData } from "../data/data";
import Skills from "../../features/Skills";
import Loading from "../components/Loading";
import Contact from "../../features/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unmounted = true;
    setTimeout(() => {
      if (unmounted) {
        setLoading(false);
      }
    }, 2000);
    return () => {
      unmounted = false;
    };
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Navbar />
        <Hero heroProps={AboutData} />
        <About aboutProps={AboutData} />
        <Skills />
        <Contact />
      </>
    );
  }
}
