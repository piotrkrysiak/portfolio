import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import "./styles.css";
import About from "../../features/About";
import { AboutData } from "../data/data";
// TODO: 1. Navbar przy skrolu 2. Zdjęcie naprawić 3.dodać animację ikonkę scrolla w hero 4.mediaquero do about
const App = () => {
  return (
    <>
      <Navbar />
      <Hero heroProps={AboutData} />
      <About aboutProps={AboutData} />
      {/* <div
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{ backgroundColor: "white" }}
      >
        <p>
          Lorem ipsum \n dolor sit amet consectetur adipisicing elit. Qui optio
          temporibus est libero dignissimos sequi molestiae veritatis dicta
          ratione necessitatibus voluptatum maiores nulla nam voluptatibus iusto
          laudantium id, saepe nobis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui optio temporibus est libero dignissimos sequi
          molestiae veritatis dicta ratione necessitatibus voluptatum maiores
          nulla nam voluptatibus iusto laudantium id, saepe nobis! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui optio temporibus est
          libero dignissimos sequi molestiae veritatis dicta ratione
          necessitatibus voluptatum maiores nulla nam voluptatibus iusto
          laudantium id, saepe nobis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui optio temporibus est libero dignissimos sequi
          molestiae veritatis dicta ratione necessitatibus voluptatum maiores
          nulla nam voluptatibus iusto laudantium id, saepe nobis! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui optio temporibus est
          libero dignissimos sequi molestiae veritatis dicta ratione
          necessitatibus voluptatum maiores nulla nam voluptatibus iusto
          laudantium id, saepe nobis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui optio temporibus est libero dignissimos sequi
          molestiae veritatis dicta ratione necessitatibus voluptatum maiores
          nulla nam voluptatibus iusto laudantium id, saepe nobis! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui optio temporibus est
          libero dignissimos sequi molestiae veritatis dicta ratione
          necessitatibus voluptatum maiores nulla nam voluptatibus iusto
          laudantium id, saepe nobis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui optio temporibus est libero dignissimos sequi
          molestiae veritatis dicta ratione necessitatibus voluptatum maiores
          nulla nam voluptatibus iusto laudantium id, saepe nobis! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui optio temporibus est
          libero dignissimos sequi molestiae veritatis dicta ratione
          necessitatibus voluptatum maiores nulla nam voluptatibus iusto
          laudantium id, saepe nobis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui optio temporibus est libero dignissimos sequi
          molestiae veritatis dicta ratione necessitatibus voluptatum maiores
          nulla nam voluptatibus iusto laudantium id, saepe nobis!
        </p>
      </div> */}
    </>
  );
};

export default App;
