import React from "react";
import { useState } from "react";
import "./ColorChange.scss";

const ColorChange = () => {
  const [color, Setcolor] = useState("indigo");

  return (
    <div className="color-container" style={{ backgroundColor: color }}>
      <div className="btns">
        <button onClick={() => Setcolor("red")}>Red</button>
        <button onClick={() => Setcolor("blue")}>Blue</button>
        <button onClick={() => Setcolor("green")}>Green </button>
        <button onClick={() => Setcolor("yellow")}>Yellow </button>
        <button onClick={() => Setcolor("white")}>White </button>
        <button onClick={() => Setcolor("crimson")}>Crimson</button>
      </div>
    </div>
  );
};

export default ColorChange;
