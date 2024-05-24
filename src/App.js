import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Counter from "./Mini/Counter/Counter.jsx"
import Hello from './Hello.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello/>} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
