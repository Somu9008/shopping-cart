// import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export let cartContext = createContext();

function cartReducer(cart, action) {
  if (action.type === "ADD_CART") {
    return [...cart, action.payload];
  }
  if (action.type === "INCREQUNTITY") {
    return cart.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
  }
  if (action.type === "DECREMENT") {
    return cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
  }
  if (action.type === "DELETE") {
    return cart.filter((item) => item.id !== action.payload.id);
  }

  return cart;
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  function addToCart(NewCart) {
    console.log("added");
    dispatch({
      type: "ADD_CART",
      payload: NewCart,
    });
  }
  // console.log(cart);

  function increQuantity(id) {
    dispatch({
      type: "INCREQUNTITY",
      payload: { id: id },
    });
  }

  function removeItem(id) {
    dispatch({
      type: "DELETE",
      payload: { id: id },
    });
  }

  // function decrement(id) {
  //   dispatch({
  //     type: "DECREMENt",
  //     payload: { id: id },
  //   });

  // let TotalAmount = 0;

  // for (let i = 0; i < cart.length; i++) {
  //   TotalAmount += cart[i].price * cart[i].quantity;
  // }

  // console.log(TotalAmount);

  let TotalAmount = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  let cartItems = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  console.log(TotalAmount);

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        increQuantity,
        removeItem,
        dispatch,
        TotalAmount,
        cartItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
// }
