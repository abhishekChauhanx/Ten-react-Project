import Input from "../../Componets/Input";
import "./Category.css";

const Category = ({ handleRadioChange }) => {
  return (
    <div>
    <h2 className="sidebar-title">Category</h2>

    
    <div>
        <label className="sidebar-label-container">
          <input onChange={handleRadioChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleRadioChange={handleRadioChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
  </div>
  );
};

export default Category;
