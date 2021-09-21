import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";

function App() {

  const colors = [
    { red: "#FF0000" },
    { yellow: "#FFCC33" },
    { green: "#008000" },
    { blue: "#0000FF" },
  ];

  const [value, onChange] = useState("#FFCC33");

  return (
    <div className="container">
      <ColorPicker value={value} onChange={onChange} colors={colors} />
    </div>
  );
}

export default App;
