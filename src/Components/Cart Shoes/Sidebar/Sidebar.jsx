/* eslint-disable react/prop-types */
import Category from "./Category/Category";
import Price from "./Price/Price"
import Color from "./Colors/Color"
import "./Sidebar.css";
import { IoCart } from "react-icons/io5";
const Sidebar = ({handleRadioChange}) => {

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
            <h1 className="sidebar-title"><IoCart /></h1>
        </div>
        <Category handleRadioChange={handleRadioChange}/>
        <Price handleRadioChange={handleRadioChange}/>
        <Color handleRadioChange={handleRadioChange}/>
      </section>
    </>
  );
};

export default Sidebar;
