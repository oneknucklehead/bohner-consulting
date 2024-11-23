import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ribbon from "./components/Ribbon";
import About from "./pages/About";
import Products from "./pages/Products";

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
      </div>
    </>
  );
}

export default App;
