import React, { useReducer } from "react";
import products from "./data";
import "./Product.css";

const currencyOption = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};
function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
      const productIndex = state.findIndex(
        (item) => item.nome === action.product.nome
      );
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex,1);
      return update;
    default:
      return state;
  }
}
function getTotal(cart) {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOption);
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);
  
  function add(product) {
    setCart({ product, type: "add" });
  }

  function remove(product) {
    setCart({ product, type: "remove" });
  }


  return (
    <div className="wrapper">
      <div>Shoppung Cart: {cart.length} total items.</div>
      <div>Total: {getTotal(cart)}</div>

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
                remove(product);
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
