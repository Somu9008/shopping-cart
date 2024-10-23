import React from "react";
import style from "../UI/Modal.module.css";
import { createPortal } from "react-dom";

export default function Modal({ children, closeModal }) {
  return createPortal(
    <>
      <div onClick={closeModal} className={style.modalBackDrop}></div>
      <div className={style.modalContent}>{children}</div>
    </>,

    document.getElementById("modal")
  );
}
