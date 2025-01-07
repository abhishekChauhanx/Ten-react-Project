import { useState } from "react";

// import "./style.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div>
        <h2 className="number">{count} </h2>
      </div>
      <div className="btns-container">
        <button onClick={()=>setCount(count+1)} className="increment">+</button>
        <button onClick={()=>setCount(count-1)} className="decrement">-</button>
      </div>
    </div>
  );
};

export default Counter;
