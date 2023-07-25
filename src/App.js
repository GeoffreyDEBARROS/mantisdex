import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mantis from "./pages/Mantis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mantis" element={<Mantis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
