import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Data from "./components/Data";
import "animate.css";
import Diskon from "./components/Diskon";
import Woman from "./components/Women";
import DataWomen from "./components/DataWomen";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  console.log(Data);
  console.log(DataWomen);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="App mb-40">
        <Home />
      </div>

      {/* <Data /> */}
      <div className="mt-16">
        <hr className="w-24 mx-auto rounded h-1 bg-black" />
        <h1 className="font-bold font-poppins text-center text-2xl">
          Our Content
        </h1>
      </div>
      <div className="mx-auto m-6 p-6 flex flex-wrap items-center justify-center mb-10">
        {Data.map((item) => (
          <div
            data-aos="zoom-out-down"
            key={item.id}
            className="bg-stone-200 rounded-lg mb-10 w-64 h-56 "
          >
            <img
              src={item.image}
              alt={item.image}
              className="w-52 mx-auto hover:-rotate-6 transition-all ease-in-out  duration-300 "
            />
            <p className="text-center font-poppins font-semibold mt-5">
              {item.name}
            </p>
            <p className="text-center mt-2 font-poppins font-semibold text-sm">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      <ScrollAnimation animateIn="fadeIn">
        <Diskon />
      </ScrollAnimation>

      <Woman />

      {DataWomen.map((item) => (
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          key={item.id}
          className="bg-stone-200 rounded-lg mb-10 w-64 h-56 animate_animated animate__backInRight mx-auto mt-5 hover:scale-110 hover:shadow-lg transition-all ease-in-out  duration-300"
        >
          <img
            src={item.image}
            alt={item.image}
            className="w-52 animate__animated animate__bounceInUp mx-auto "
          />
          <p className="font-poppins font-semibold text-center">{item.name}</p>
          <p className="font-poppins font-semibold text-center text-sm mt-2">
            {item.price}
          </p>
        </div>
      ))}

      <Banner />
      <div className="mt-16">
        <hr className="w-24 mx-auto rounded h-1 bg-black" />
        <h1 className="font-bold font-poppins text-center text-2xl">New 
        Collection
        </h1>
      </div>
      <Collection />
    </>
  );
}

export default App;
