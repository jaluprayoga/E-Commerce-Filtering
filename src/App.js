import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [searchInputValue, setSearchInputValue] = useState("");

  // ----------- Search Input Filtering -----------
  const handleSearcInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const filteredItems = products.filter((product) => {
    const filtered = product.title
      .toLowerCase()
      .includes(searchInputValue.toLowerCase());
    return filtered;
  });

  // ----------- Radio and Recommended Buttons Filtering -----------
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value !== "") {
      setSelectedCategory({
        ...selectedCategory,
        [name]: value,
      });
    } else {
      // console.log("before: ", selectedCategory);
      // const updateSelectedCategory = delete selectedCategory[name];
      // console.log("after: ", selectedCategory);
      const removeKey = (key, { [key]: _, ...rest }) => rest;
      const updateSelectedCategory = removeKey(name, selectedCategory);
      setSelectedCategory(updateSelectedCategory);
    }
  };

  function filteredData(products, selectedCategory, searchInputValue) {
    let filteredProducts = products;

    // Applying filter via SearchInput Items
    if (searchInputValue) {
      filteredProducts = filteredItems;
    }

    // Applying filter via Radio and Recommended Buttons
    if (selectedCategory) {
      const filterConditions = selectedCategory;
      filteredProducts = filteredProducts.filter((product) =>
        Object.entries(filterConditions).every(
          ([category, value]) => product[category] === value
        )
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
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

  const result = filteredData(products, selectedCategory, searchInputValue);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation
        query={searchInputValue}
        handleChange={handleSearcInputChange}
      />
      <Recommended handleClick={handleChange} />
      <Products result={result} />
    </>
  );
}

export default App;
