import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router";
import ServicesPage from "./pages/ServicesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter basename="/bohner-consulting">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
