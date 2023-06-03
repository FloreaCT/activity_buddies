import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router";
import { UserAuth } from "../../Auth/AuthContext";
import { createSyncedUser } from "../../Services/ProfileService";
import { sendEmailVerification } from "firebase/auth";
import _ from "lodash";

const autoFillStyle = css`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #4285f4;
    -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

// Render the form for editing or creating a user
const RegisterForm = ({ onClose = { onClose }, register = { register } }) => {
  // Define state variables for a new user, form errors, and creating an user
  const [initialUser, setInitialUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "Please fill in name",
    lastName: "",
    phone: "",
    university: "",
  });
  const [newUser, setNewUser] = useState({ ...initialUser });
  const [errors, setErrors] = useState({
    email: "Invalid email address",
    password: "Password must be atleast 8 characters",
    passwordConfirm: "Password do not match",
    firstName: "First name is required",
    lastName: "Last name is required",
    phone: "Number ex: 0730 000 0000",
    university: "University is required",
    form: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const { createUser, signIn } = UserAuth();
  //Initializing useNavigate hook
  const navigate = useNavigate();

  // Handeling new user registration submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // Set submitted state to true
    setSubmitted(true);
    const emptyFields = Object.entries(newUser).filter(
      ([key, value]) => !value
    );
    if (emptyFields.length > 0) {
      const fieldNames = emptyFields.map(([key, value]) => key).join(", ");
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: "Please fill in all the inputs",
      }));
      return;
    }
    console.log(errors);
    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== null);
    if (hasErrors || _.isEqual(initialUser, newUser)) {
      return;
    }
    const { email, password } = newUser;
    try {
      // Create a new user using the createUser function from the UserAuth context
      const userResponse = await createUser(email, password);
      if (userResponse) {
        // Create a user in the Firebase Storage that is synced with the authenticated user
        createSyncedUser(newUser, register, userResponse.user.uid);
        // Send an email verification
        sendEmailVerification(userResponse.user);
        // Sign in the user
        signIn(email, password);
        // Navigate to the home page
        navigate("/");
      }
    } catch (e) {
      // Display any errors that occur during user registration
      console.log("Firebase error:", e.message);
      // Check for specific error codes
      if (e.code === "auth/email-already-in-use") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: "Email already in use",
        }));
        return;
      } else if (e.code === "auth/weak-password") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: "Choose a stronger password",
        }));
        return;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: "Unrecognized firebase error, please contact an admin at admin@activity-buddies.web.app",
        }));
        return;
      }
    }
  };

  // Handle changes to the input fields
  const handleChange = (event) => {
    // Create a new object

    const { name, value } = event.target;
    // Update newUser state
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      form: null,
    }));
    // Validate input and set error if invalid
    switch (name) {
      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Invalid email address",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: null }));
        }
        break;
      case "password":
        if (value.length < 8) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: "Minimum password length is 8",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, password: null }));
        }
        break;
      case "passwordConfirm":
        if (value !== newUser.password) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            passwordConfirm: "Passwords do not match",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, passwordConfirm: null }));
        }
        break;
      case "firstName":
        if (!value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            firstName: "First name is required",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, firstName: null }));
        }
        break;
      case "lastName":
        if (!value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            lastName: "Last name is required",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, lastName: null }));
        }
        break;
      case "phone":
        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            phone: "Number ex: 0730 000 0000",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, phone: null }));
        }
        break;
      case "university":
        if (!value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            university: "University is required",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, university: null }));
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h3 className="text-2xl text-center mb-10">
        Register to Buddy Activity platform
      </h3>
      <form
        className={`${autoFillStyle} min-w-[400px] `}
        onSubmit={(e) => handleRegisterSubmit(e)}
        noValidate
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
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => handleChange(e)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          {submitted && (errors.email || newUser.email === "") && (
            <span className="text-red-500">{errors.email}</span>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => handleChange(e)}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer"
          >
            Password
          </label>
          {submitted && (errors.password || newUser.password === "") && (
            <span className="text-red-500">{errors.password}</span>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => handleChange(e)}
          />

          <label
            htmlFor="passwordConfirm"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
          {submitted && errors.passwordConfirm && (
            <span className="text-red-500">{errors.passwordConfirm}</span>
          )}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => handleChange(e)}
            />
            <label
              htmlFor="firstName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
            {submitted && errors.firstName && (
              <span className="text-red-500">{errors.firstName}</span>
            )}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => handleChange(e)}
            />
            <label
              htmlFor="lastName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
            {submitted && errors.lastName && (
              <span className="text-red-500">{errors.lastName}</span>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => handleChange(e)}
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
            {submitted && errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="university"
              id="university"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => handleChange(e)}
            />
            <label
              htmlFor="university"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              University
            </label>
            {submitted && errors.university && (
              <span className="text-red-500">{errors.university}</span>
            )}
          </div>
        </div>
        <div className="text-center">
          {submitted && errors.form && (
            <span className="text-red-500 ">{errors.form}</span>
          )}
        </div>
        <div className="grid">
          <div className="flex justify-center mt-3 ml-4 p-1">
            <ul>
              <li className="flex items-center py-1">
                <div
                  className={`rounded-full p-1 fill-current ${
                    newUser?.password === newUser?.passwordConfirm &&
                    newUser?.password?.length > 0
                      ? "bg-green-200 text-green-700"
                      : "bg-red-200 text-red-700"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      style={{
                        display:
                          newUser?.password === newUser?.passwordConfirm &&
                          newUser?.password?.length > 0
                            ? "block"
                            : "none",
                      }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                    <path
                      style={{
                        display:
                          newUser?.password !== newUser?.passwordConfirm ||
                          newUser?.password?.length === 0
                            ? "block"
                            : "none",
                      }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <span
                  className={`font-medium text-sm ml-3 ${
                    newUser?.password === newUser?.passwordConfirm &&
                    newUser?.password?.length > 0
                      ? "text-green-700"
                      : "text-red-500"
                  }`}
                >
                  {newUser?.password === newUser?.passwordConfirm &&
                  newUser?.password?.length > 0
                    ? "Passwords match"
                    : "Passwords do not match"}
                </span>
              </li>
              <li className="flex items-center m-auto py-1 mb-4">
                <div
                  className={`rounded-full p-1 fill-current ${
                    newUser?.password?.length > 7
                      ? "bg-green-200 text-green-700"
                      : "bg-red-200 text-red-700"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      style={{
                        display:
                          newUser?.password?.length > 7 ? "block" : "none",
                      }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                    <path
                      style={{
                        display:
                          newUser?.password?.length < 7 ? "block" : "none",
                      }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <span
                  className={`font-medium text-sm ml-3 ${
                    newUser?.password?.length > 7
                      ? "text-green-700"
                      : "text-red-500"
                  }`}
                >
                  {newUser?.password?.length > 7
                    ? "The minimum length is reached"
                    : "At least 8 characters required"}
                </span>
              </li>
            </ul>
          </div>
          <button
            type="submit"
            className="m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
