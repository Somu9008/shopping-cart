import { useContext, useState } from "react";
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, TotalAmount } = useContext(cartContext);

  if (cart.length === 0) {
    return <h1>Nothing cart item added</h1>;
  }

  return (
    <div>
      <h3>Shopping Cart</h3>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2>Total Amount :{TotalAmount} </h2>
    </div>
  );
}
