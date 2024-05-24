import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Counter from "./Mini/Counter/Counter.jsx"
import Hello from './Hello.jsx';
import PropsPrac from "./Mini/PropsPrac/PropsPrac.jsx";
import ColorChange from "./Mini/ColorChange/ColorChange.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/propsprac" element={<PropsPrac/>} />
        <Route path="/colorchange" element={<ColorChange/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
