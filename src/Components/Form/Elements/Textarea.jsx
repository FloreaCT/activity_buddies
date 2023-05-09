import React, { useContext } from "react";
import { FormContext } from "../FormContext";

const Textarea = ({ field_label, field_id }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="relative z-0 w-full group">
      <label
        htmlFor={field_label}
        className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        About you
      </label>
      <textarea
        id={field_label}
        rows="5"
        onChange={(event) => handleChange(field_id, event)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write something about you..."
      ></textarea>
    </div>
  );
};

export default Textarea;
