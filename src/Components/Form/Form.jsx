import React, { useState, useEffect } from "react";
import { initFlowbite } from "flowbite";
import { css } from "@emotion/css";
import { updateProfile } from "../Profile/ProfileService";

const autoFillStyle = css`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #4285f4;
    -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const Form = ({ onClose = { onClose }, userProfile = { userProfile } }) => {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    initFlowbite();
    setFormValues(userProfile);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const keys = name.split(".");
    if (keys.length === 1) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    } else if (keys.length === 2) {
      const [parentKey, childKey] = keys;
      setFormValues((prevValues) => ({
        ...prevValues,
        [parentKey]: {
          ...prevValues[parentKey],
          [childKey]: value,
        },
      }));
    } else if (keys.length === 3) {
      const [parentKey, childKey, grandChildKey] = keys;
      setFormValues((prevValues) => ({
        ...prevValues,
        [parentKey]: {
          ...prevValues[parentKey],
          [childKey]: {
            ...prevValues[parentKey][childKey],
            [grandChildKey]: value,
          },
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formValues);
    onClose();
  };

  return (
    <div>
      <h3 className="text-2xl text-center mb-10">Edit your profile</h3>
      <form className={`${autoFillStyle}`} onSubmit={(e) => handleSubmit(e)}>
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="basicinfo.firstName"
              id="basicinfo.firstName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => handleChange(e)}
              defaultValue={userProfile.basicinfo.firstName}
              required
            />
            <label
              htmlFor="basicinfo.first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="basicinfo.lastName"
              id="basicinfo.lastName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={userProfile.basicinfo.lastName}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            <label
              htmlFor="lastName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
//   console.log("The userProfile is: ", userProfile);

//   useEffect(() => {
//     initFlowbite();
//     setUserData(userProfile);
//   }, []);

//   const handleEditProfile = () => {
//     console.log("The userData is: ", userData);
//     return;
//   };

//   return (
//     <>
//       <h3 className="text-2xl text-center mb-10">Edit your profile</h3>
//       <form
//         className={`${autoFillStyle} grid grid-cols-2 gap-4 max-w-[800px]`}
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <button
//           type="button"
//           className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
//           onClick={() => onClose()}
//         >
//           <svg
//             aria-hidden="true"
//             className="w-5 h-5"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//           <span className="sr-only">Close modal</span>
//         </button>
//       </form>
//       <div className="flex">
//         <button
//           className="m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           type="submit"
//           onClick={handleEditProfile}
//         >
//           Save changes
//         </button>
//       </div>
//     </>
//   );
// };

// export default Form;
