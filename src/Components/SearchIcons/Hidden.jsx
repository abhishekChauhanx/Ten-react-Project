import "./style.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const Hidden = () => {
  const [showInput, setInputShow] = useState(false);
  const [backgroundColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setInputShow(false);
      setBgColor("#fff")
    }
  };
  return (
    <>
      <section className="container" style={{ backgroundColor }} onClick={handleClick}>
        {showInput ? (
          <input type="text" placeholder="Search • • • " />
        ) : (
          <FaSearch onClick={() => setInputShow(true)}></FaSearch>
        )}
      </section>
    </>
  );
};

export default Hidden;
