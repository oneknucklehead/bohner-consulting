import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SmartTech from "./pages/SmartTech";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/smart-tech" element={<SmartTech />} />
      </Routes>
    </>
  );
}

export default App;
