import { cartContext } from "../context/CartProvider";
import "./Product.css";
import { useContext } from "react";

export default function Product({ id, title, price, img, quantity }) {
  // let { addToCart } = useCart();
  let { addToCart, cart } = useContext(cartContext);
  let NewCart = {
    id: id,
    title: title,
    img: img,
    price: price,
    quantity: quantity,
  };

  function addNewCart() {
    for (let item of cart) {
      if (item.id === id) {
        alert("cart is added already");
        return;
      }
    }
    addToCart(NewCart);
    alert("item added To Cart SuccessFully");
  }

  //   alert("cart added successfully!!!");

  return (
    <div className="product">
      <p>id : {id}</p>
      <img src={img} alt="" />
      <p> Title : {title}</p>
      <p>Price : {price}</p>
      <button onClick={addNewCart}>Add to cart</button>
    </div>
  );
}
