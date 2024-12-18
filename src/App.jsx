import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router";
import Services from "./pages/Services";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter basename="/bohner-consulting">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
