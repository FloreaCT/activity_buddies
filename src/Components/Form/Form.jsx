import React, { useState, useEffect } from "react";
import formJSON from "./formElement.json";
import Element from "./Element";
import { FormContext } from "./FormContext";
import { initFlowbite } from "flowbite";
import { css } from "@emotion/css";
import { useNavigate } from "react-router";
import { UserAuth } from "../../Auth/AuthContext";

const autoFillStyle = css`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #4285f4;
    -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const Form = ({ onClose = { onClose }, register = { register } }) => {
  const [elements, setElements] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    setElements(formJSON);
    initFlowbite();
  }, []);
  1;

  const { fields, page_label } = elements ?? {};
  console.log(elements);
  const { createUser, signIn, googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const email = fields[6].field_value;
    const password = fields[16].field_value;

    try {
      const newUser = await createUser(email, password);
      if (newUser) {
        signIn(email, password);
        navigate("/");
      }
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleChange = (id, event) => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checked":
            field["field_value"] = event.target.checked;
            break;
          default:
            field["field_value"] = event.target.value;
            break;
        }
        field["field_value"] = event.target.value;
      }
      setElements(newElements);
    });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <>
        {register ? (
          <h3 className="text-2xl text-center mb-10">{page_label}</h3>
        ) : (
          <h3 className="text-2xl text-center mb-10">Edit your profile</h3>
        )}
        <form
          className={`${autoFillStyle} grid grid-cols-2 gap-4 max-w-[800px]`}
        >
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => onClose()}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {fields
            ? fields.map((field, i) =>
                !register && field.field_id === "agree" ? null : (
                  <Element key={i} field={field} />
                )
              )
            : null}
        </form>
        <div className="flex">
          {register ? (
            <button
              className="m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
              onClick={handleRegisterSubmit}
            >
              Register
            </button>
          ) : (
            <button
              className="m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
              onClick={handleRegisterSubmit}
            >
              Save changes
            </button>
          )}
        </div>
      </>
    </FormContext.Provider>
  );
};

export default Form;
