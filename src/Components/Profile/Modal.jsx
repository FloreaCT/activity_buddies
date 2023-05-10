import { css } from "@emotion/css";
import React from "react";
import ReactDom from "react-dom";
import Form from "../Form/Form";
import RegisterForm from "../Form/RegisterForm";

const modalStyles = css`
  position: relative;
  display: inline-block;
  margin: 5% auto auto auto;
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  border-radius: 20px;
`;

const modalOverlay = css`
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = ({
  open,
  onClose,
  userData,
  register,
  handleSubmit,
  userProfile,
}) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className={modalOverlay}>
      <div className={modalStyles}>
        {!register ? (
          <Form
            open={open}
            onClose={onClose}
            userProfile={userProfile}
            register={register}
            handleSubmit={handleSubmit}
          />
        ) : (
          <RegisterForm
            open={open}
            onClose={onClose}
            userData={userData}
            handleSubmit={handleSubmit}
            register={register}
          />
        )}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
