import Navbar from "@/components/Navbar";
import React from "react";
import Home from "./Home";
import Ribbon from "@/components/Ribbon";
import About from "./About";
import Products from "./Products";
import Clients from "./Clients";
import Stats from "./Stats";
import Contact from "./Contact";
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
