import { css } from "@emotion/css";
import React from "react";
import ReactDom from "react-dom";

const modalStyles = css`
  position: fixed;
  top: 5%;
  left: 40%;
  transform: "translate(-50%, -50%)";
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  border-radius: 20px;
`;

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = ({ open, children, onSave }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className={modalOverlay}>
      <div className={modalStyles}>
        {children}
        <button onClick={onSave}></button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
