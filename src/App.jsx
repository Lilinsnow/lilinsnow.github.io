import React from "react";
import About from "./components/about/About";

import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/Contact/Contact";



const App = () => {

  return (
    <div>
      
      <Intro />
      <About />
      <ProductList />
      <Contact />
      
    </div>
  );
};

export default App;