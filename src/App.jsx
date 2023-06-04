import React from "react";
import { IconContext } from "react-icons";
import About from "./components/about/About";

import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />

      <IconContext.Provider value={{ color: "white" }}>
        <Contact />
      </IconContext.Provider>
    </div>
  );
};

export default App;
