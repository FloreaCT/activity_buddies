import React, { useEffect, useState } from "react";
import { UserAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router";
import { auth } from "../Config/firebase";
import GoogleButton from "react-google-button";
import { initFlowbite } from "flowbite";
import { css } from "@emotion/css";
import Modal from "../Utils/Modal";
import {
  createSyncedUser,
  verifyExistingUser,
} from "../Services/ProfileService";

const autoFillStyle = css`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    border: 0px;
    -webkit-text-fill-color: #4285f4;
    -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

// Define the SignIn component
const SignIn = () => {
  // Define state variables for the email, password, error, and the current user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [theUser, setTheUser] = useState(null);
  // Define state variables for showing the modal and getting the signIn, googleSignIn, and user functions from the UserAuth context
  const [show, setShow] = useState(false);
  const { signIn, googleSignIn, user } = UserAuth();

  // Determine whether to register a new user or not based on whether there is a current user
  const register = auth?.currentUser?.uid ? false : true;

  // Initialize the Flowbite library and set the current user when the component mounts
  const navigate = useNavigate();
  useEffect(() => {
    if (theUser) {
      navigate("/");
    } else {
      initFlowbite();
      setTheUser(user);
      return;
    }
  }, [user]);

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      // Sign in with Google using the googleSignIn function from the UserAuth context
      await googleSignIn();
      // Check if the user already exists in the database using the verifyExistingUser function
      const verify = await verifyExistingUser(auth.currentUser.uid);
      if (verify) {
        navigate("/");
      } else {
        // If the user does not exist, create a new user using the createSyncedUser function
        const names = auth.currentUser.displayName.split(" ");
        const lastName = names.pop();
        const firstName = names.join(" ");
        const newUser = {
          id: auth.currentUser.uid,
          firstName: firstName,
          lastName: lastName,
          email: auth.currentUser.email,
          photoURL: auth.currentUser.photoURL,
          phone: "Please set your phone number",
          university: "Please set your university",
        };
        createSyncedUser(newUser, register, auth.currentUser.uid);

        navigate("/");
      }
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Sign in with email and password using the signIn function from the UserAuth context
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    return;
  };

  // Handle closing the modal
  const handleModalClose = () => {
    setShow(false);
  };

  // Render the SignIn component
  return (
    <section className={`${autoFillStyle} h-screen`}>
      {/* <!-- Main modal --> */}

      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleLoginSubmit}>
              {/* <!--Sign in section--> */}
              <div className="flex flex-row items-center justify-center lg:justify-center">
                {/* <!-- Google Button --> */}
                <GoogleButton onClick={handleGoogleSignIn} />
              </div>

              {/* <!-- Separator between social media sign in and email/password sign in --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or use your Student email
                </p>
              </div>
              {/* <!-- Email input --> */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Student email address
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label
                  htmlFor="password"
                  className={`${autoFillStyle} peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                >
                  Password
                </label>
              </div>
              {error && (
                <div className="text-red-600 mb-3">
                  <span>{error}</span>
                </div>
              )}
              <div className="mb-6 flex items-center justify-between">
                {/* <!-- Remember me checkbox --> */}
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

                {/* <!--Forgot password link--> */}
                <div onClick={handleForgotPassword}>
                  <p className="text-sm cursor-pointer text-blue-700 hover:underline dark:text-blue-500 hover:text-red-600">
                    Forgot password?
                  </p>
                </div>
              </div>

              {/* <!-- Login button --> */}
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Login
                </button>

                {/* <!-- Register link --> */}
                <p className="px-2 mb-0 mt-2 pt-1 text-sm font-semibold inline-block">
                  Or if you dont have an account you can
                  {/* <!-- Modal toggle --> */}
                  <button
                    className="inline-block rounded bg-red-600 mx-4 px-5 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    type="button"
                    onClick={() => setShow(true)}
                  >
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* New user registration modal */}
      <Modal open={show} onClose={handleModalClose} register={register}></Modal>
    </section>
  );
};

export default SignIn;
