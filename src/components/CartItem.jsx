import React, { useContext } from "react";
import "./Cartitems.css";
import { cartContext } from "../context/CartProvider";

export default function CartItem({ id, title, img, price, quantity }) {
  // const { increQuantity, decreQuantity, removeItem } = useCart();
  const { increQuantity, removeItem, dispatch } = useContext(cartContext);

  function decrement(id) {
    dispatch({
      type: "DECREMENT",
      payload: { id: id },
    });
  }

  return (
    <div className="cartitem">
      <p>id : {id}</p>
      <div className="item-title">
        <img src={img} alt="" />
        <p>title : {title}</p>
      </div>

      <p>price : {price * quantity}</p>

      <div className="item-qty">
        <button
          onClick={() => {
            if (quantity <= 1) {
              return;
            }
            decrement(id);
          }}
        >
          -
        </button>
        <p>{quantity}</p>

        <button
          onClick={() => {
            increQuantity(id);
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={() => {
          removeItem(id);
        }}
      >
        remove Item
      </button>
    </div>
  );
}
