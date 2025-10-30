import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Shop</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
