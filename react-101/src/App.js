import { useState } from "react";
import "./App.css";

const products = [
  { name: "iphone 15", price: 1500, stock: 30 },
  { name: "iphone 14", price: 1200, stock: 24 },
  { name: "iphone 13", price: 1100, stock: 10 },
  { name: "samsung s23", price: 900, stock: 13 },
  { name: "samsung s22", price: 800, stock: 10 },
  { name: "pixel 7", price: 899, stock: 10 },
];

function App() {
  // const style = { color: "blue", textTransform: "uppercase" };

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <h2>LOGO</h2>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
        </div>
      </nav>
    </header>
  );
}

function Main() {
  const allProduct = products;

  return (
    <main>
      <h2>List of Products in Sale</h2>
      <div className="product-list">
        {allProduct.map((product) => (
          <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.stock}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
export default App;
