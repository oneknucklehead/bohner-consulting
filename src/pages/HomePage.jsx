import React from "react";
import Navbar from "@/components/Navbar";
import Home from "@/sections/Home";
import Ribbon from "@/components/Ribbon";
import About from "@/sections/About";
import Products from "@/sections/Products";
import Clients from "@/sections/Clients";
import Stats from "@/sections/Stats";
import Contact from "@/sections/Contact";
import FooterSection from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="relative font-montserrat">
        <Navbar />
        <section id="home" className="">
          <Home />
        </section>
        <Ribbon />
        <section id="about" className="">
          <About />
        </section>
        <section id="product" className="">
          <Products />
        </section>
        <section id="client" className="">
          <Clients />
        </section>
        <section id="trust" className="">
          <Stats />
        </section>
        <section id="contact" className="">
          <Contact />
        </section>
        <FooterSection />
      </div>
    </>
  );
};

export default HomePage;
