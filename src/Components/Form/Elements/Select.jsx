import React, { useContext } from "react";
import { FormContext } from "../FormContext";

const Select = ({
  field_id,
  field_mandatory,
  field_label,
  field_type,
  field_placeholder,
  field_value,
}) => {
  const field_options = [
    "photography",
    "travel",
    "running",
    "yoga",
    "meditation",
    "reading",
    "swiming",
    "hiking",
    "jogging",
    "karting",
    "reading",
    "paintball",
    "movies",
    "footbal",
    "volunteer",
    "debates",
    "fitness",
    "self-defence",
    "dance",
    "science",
    "technology",
    "videography",
    "fashion",
  ];
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <label htmlFor="interestSearch" className="sr-only">
        Search for desired interest
      </label>
      <div
        id="dropdownSearch"
        className="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700"
      >
        <div className="p-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <input
              type={field_type}
              id="input-group-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search interest"
            />
          </div>
        </div>
        <ul
          className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownSearchButton"
          name="interestSearch"
        >
          {field_options.length > 0 &&
            field_options.map((option, i) => {
              return (
                <li key={i}>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id={i}
                      type="checkbox"
                      value={option.toUpperCase()}
                      onChange={(event) => handleChange(field_id, event)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={i}
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Select;
