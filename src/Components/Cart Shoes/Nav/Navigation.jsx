import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
const Navigation = ({handleInputChange,query}) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          placeholder="Enter Shoes Name • • "
          className="search-input"
          onChange={handleInputChange}
          value={query}
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <FiShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
