import React, { useReducer, useState } from "react";
import products from "./data";
import "./Product.css";

const currencyOption = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};
function cartReducer(state, product) {
    return [...state, product]
}
function totalReducer(state, price) {
    return state + price
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer,[])
  const [total, setTotal] = useReducer(totalReducer,0);

  function add(product) {
    setCart(product.nome);
    setTotal(product.price);
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
        <button onClick={() => add(product)}>Add</button>
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
