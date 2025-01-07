import "./style.css";
import { useState } from "react";
const Cal = () => {
  const [input, setInput] = useState("");

  const display = (value) => {
    setInput(input + value);
  };
  const clear = () => {
    setInput("");
  };

  const calculator = ()=>{
    setInput(eval(input))
  }
  return (
    <div>
      <form className="calculator" name="calc">
        <input
          type="text"
          className="value"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span className="num clear" onClick={() => clear()}>
          c
        </span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>
          +
        </span>

        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span className="num equal" onClick={() => calculator()}>
          =
        </span>
      </form>
    </div>
  );
};

export default Cal;
