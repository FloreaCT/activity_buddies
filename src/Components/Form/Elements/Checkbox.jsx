import React, { useContext } from "react";
import { FormContext } from "../FormContext";

const Checkbox = ({ field_id, field_label }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type="checkbox"
        id="checkbox"
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        required
        aria-describedby="emailHelp"
        onChange={(event) => handleChange(field_id, event)}
      />
      <label
        htmlFor="checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {field_label}
      </label>
    </div>
  );
};

export default Checkbox;
