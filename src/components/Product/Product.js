import React, { useReducer, useState } from "react";
import products from "./data";
import "./Product.css";

const currencyOption = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};
function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.nome];
    case "remove":
      const update = [...state];
      update.splice(update.indexOf(action.nome), 1);
      return update;
    default:
      return state;
  }
}

function totalReducer(state, action) {
  if (action.type === "add") {
    return state + action.price;
  }
  return state - action.price;
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [total, setTotal] = useReducer(totalReducer, 0);

  function add(product) {
    const { nome, price } = product;
    setCart({ nome, type: "add" });
    setTotal({ price, type: "add" });
  }

  function remove(product) {
    const { nome, price } = product;
    setCart({ nome, type: "remove" });
    setTotal({ price, type: "remove" });
  }

  function getTotal() {
    return total.toLocaleString(undefined, currencyOption);
  }

  return (
    <div className="wrapper">
      <div>Shoppung Cart: {cart.length} total items.</div>
      <div>Total: {getTotal(total)}</div>

      <div>
        {products.map((product) => (
          <div key={product.nome}>
            <div className="product">
              <span role="img" aria-label={product.nome}>
                {product.emoji}
              </span>
            </div>
            <button onClick={() => add(product)}>Add</button>
            <button
              onClick={() => {
                remove(product)
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
