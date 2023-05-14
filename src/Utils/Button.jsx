import React from "react";
import { css } from "@emotion/css";

const Button = ({
  text,
  onClick,
  buttonStyles,
  type,
  disabled,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
