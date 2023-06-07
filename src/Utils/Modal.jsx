import { css } from "@emotion/css";
import React from "react";
import ReactDom from "react-dom";
import Form from "../Components/Form/Form";
import RegisterForm from "../Components/Form/RegisterForm";
import ActivityForm from "../Components/Form/ActivityForm";
import BuddyForm from "../Components/Form/BuddyForm";

//Modal css
const modalStyles = css`
  position: relative;
  display: inline-block;
  margin: 5% auto auto auto;
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  border-radius: 20px;
`;
//Overlay css
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
  overflow: auto;
`;

// Define the Modal component
const Modal = ({
  open,
  onClose,
  userData,
  register,
  handleSubmit,
  userProfile,
  activity,
  creator,
}) => {
  // If the modal is not open, return null
  if (!open) return null;

  let content;
  // Render different forms based on the value of the register prop
  switch (register) {
    case true:
      content = (
        <RegisterForm
          open={open}
          onClose={onClose}
          userData={userData}
          handleSubmit={handleSubmit}
          register={register}
        />
      );
      break;
    case false:
      content = (
        <Form
          open={open}
          onClose={onClose}
          userProfile={userProfile}
          register={register}
          handleSubmit={handleSubmit}
        />
      );
      break;
    case "activity":
      content = (
        <ActivityForm
          open={open}
          onClose={onClose}
          userProfile={userProfile}
          register={register}
          handleSubmit={handleSubmit}
          activity={activity}
          creator={creator}
        />
      );
      break;
    case "buddy":
      content = <BuddyForm open={open} onClose={onClose} userData={userData} />;
      break;
    default:
      content = null;
  }
  // Render the Modal component using React Portal
  return ReactDom.createPortal(
    <div className={modalOverlay}>
      <div className={modalStyles}>{content}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
