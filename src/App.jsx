import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoodBoard from "./pages/MoodBoard";
import Felicidade from "./pages/emocoes/Felicidade";
import Tristeza from "./pages/emocoes/Tristeza";
import Amor from "./pages/emocoes/Amor";
import Raiva from "./pages/emocoes/Raiva";
import Surpresa from "./pages/emocoes/Surpresa";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mood" element={<MoodBoard />} />
      <Route path="/felicidade" element={<Felicidade />} />
      <Route path="/tristeza" element={<Tristeza />} />
      <Route path="/amor" element={<Amor />} />
      <Route path="/raiva" element={<Raiva />} />
      <Route path="/surpresa" element={<Surpresa />} />
    </Routes>
  );
}

export default App;
