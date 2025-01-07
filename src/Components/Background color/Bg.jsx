import { useState } from "react";
// import "./index.css"
const Bg = () => {
  const [backgroundColor, setBgColor] = useState("white");
  const [color, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  function handleClick(){
    setBgColor(backgroundColor === "white" ? "#1b1b1b" :"white");;
    setTextColor(color === "#1b1b1b" ? "#ffa31a": "#1b1b1b" );
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white")
  }
  return (
    <div style={{  backgroundColor, color }}>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: color,
          border: `2px solid ${color}`,
        }}
      >
        {(backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme ")}
      </button>
      <section className="content">
        <h1>
          Welcome to a <br /> Real World...
        </h1>
      </section>
    </div>
  );
};

export default Bg;
