import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Counter from "./Mini/Counter/Counter.jsx"
import Hello from './Hello.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello/>} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </Router>
  );
}

export default App;
