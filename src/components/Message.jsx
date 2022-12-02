import React from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";

export default function Message() {
  let { openModal } = useSelector((state) => state.user);
  if (openModal) {
    setTimeout(() => {
      document.querySelector(".message").classList.remove("active");
    }, 3000);
  }
  return ReactDOM.createPortal(
    <div className={`message ${openModal ? "active" : ""}`}>
      <p>Congratulations register successful!!!</p>
    </div>,
    document.getElementById("rootMessage")
  );
}
