import React, { useState } from "react";
import products from "./data";
import "./Product.css";

const currencyOption = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export default function Product() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function add() {
    setCart(["ice cream"]);
    setTotal(5);
  }
  function getTotal() {
    return total.toLocaleString(undefined, currencyOption);
  }

  return (
    <div className="wrapper">
      <div>Shoppung Cart: {cart.length} total items.</div>
      <div>Total: {getTotal(total)}</div>

      <div>
        {products.map(product => (
            <div key={product.nome}>
        <div className="product">
          <span role="img" aria-label={product.nome}>
             {product.emoji}            
          </span>
        </div>
        <button onClick={add}>Add</button>
        <button
          onClick={() => {
            setCart([]);
            setTotal(0);
          }}
        >
          Remove
        </button>
            </div>
        ))}
      </div>
    </div>
  );
}
