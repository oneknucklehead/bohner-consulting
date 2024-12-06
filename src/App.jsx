import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ribbon from "./components/Ribbon";
import About from "./pages/About";
import Products from "./pages/Products";
import Stats from "./pages/Stats";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import FooterSection from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-hidden relative font-montserrat">
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
        <section id="trust" className="">
          <Stats />
        </section>
        <section id="client" className="">
          <Clients />
        </section>
        <section id="contact" className="">
          <Contact />
        </section>
        <FooterSection />
      </div>
    </>
  );
}

export default App;
