import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-hidden relative font-montserrat">
        <Navbar />
        <section id="home" className="">
          <Home />
        </section>
      </div>
    </>
  );
}

export default App;
