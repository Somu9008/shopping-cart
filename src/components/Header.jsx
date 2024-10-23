import { useContext, useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";
import "./Header.css";
import cart_icon from "../assets/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png";
import { cartContext } from "../context/CartProvider";

export default function Header() {
  const { cartItems } = useContext(cartContext);
  const [isModalShow, setIsModalShow] = useState(false);

  function closeModal() {
    setIsModalShow(false);
  }

  useEffect(() => {
    if (isModalShow) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalShow]);

  return (
    <header>
      <nav className="nav">
        <h1>Shop Cart</h1>
        <div>
          <img src={cart_icon} alt="" height={"40px"} width={"40px"} />
          <div className="dot">{cartItems}</div>
          <button
            onClick={() => {
              setIsModalShow(true);
            }}
          >
            Cart
          </button>
        </div>
      </nav>
      {isModalShow && (
        <Modal closeModal={closeModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
}
