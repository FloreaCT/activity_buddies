import React from "react";
import { css } from "@emotion/css";

const Button = ({ text, onClick, buttonStyles, type }) => {
  return (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
