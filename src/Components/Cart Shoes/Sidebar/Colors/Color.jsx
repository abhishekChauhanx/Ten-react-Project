import Input from "../../Componets/Input";
import "./Color.css";

const Color = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="test𝟯"
        />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleRadioChange={handleRadioChange}
        value="black"
        title="Black"
        name="test𝟯"
        color="black"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="blue"
        title="Blue"
        name="test𝟯"
        color="blue"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="red"
        title="Red"
        name="test𝟯"
        color="red"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="green"
        title="Green"
        name="test𝟯"
        color="green"
      />
      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value="white"
          name="test𝟯"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Color;
