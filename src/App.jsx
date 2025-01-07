// import Counter from "./Components/Counter App/Counter";

import { useState } from "react";
import Navigation from "./Components/Cart Shoes/Nav/Navigation";
import Products from "./Components/Cart Shoes/Product/Products";
import Recommended from "./Components/Cart Shoes/Recommended/Recommended";
import Sidebar from "./Components/Cart Shoes/Sidebar/Sidebar";
import ProductsData from "./Components/Cart Shoes/Db/data";
import Card from "./Components/Cart Shoes/Componets/Card";
// import FormValid from "./Components/FormValid/FormValid";

// import Accordion from "./Components/Accordion/Accordion";
// import { accordionData } from "./Components/Accordion/content";
// import Testamonails from "./Components/Testamonails/Testamonails";

// import Cal from "./Components/Calculator/Cal";

// import Meal from "./Components/Meal/Meal";
// import Todo from "./Components/Todo app/Todo";
// import Bg from "./Components/Background color/Bg";
// import Hidden from "./Components/SearchIcons/Hidden";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = ProductsData.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value); 
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(ProductsData, selectedCategory, query);
  return (
    <>
      {/* <h1>Project</h1> */}
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Meal/> */}
      {/* <Cal/> */}
      {/* <Bg/> */}
      {/* <Hidden/> */}
      {/* <Testamonails/> */}
      {/* <Accordion/> */}
      {/* <div className="accordion">
  {accordionData.map((i)=>(
    <Accordion title={i.title} content={i.content} /> 
  ))}
 </div> */}
      {/* <FormValid /> */}
      <Sidebar handleRadioChange ={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended  handleBtnsChange ={handleClick}/>
      <Products result={result} />
    </>
  );
}

export default App;
