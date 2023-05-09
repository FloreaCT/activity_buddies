import React, { useContext, useState } from "react";
import { FormContext } from "../FormContext";

const Telephone = ({
  field_id,
  field_mandatory,
  field_label,
  field_value,
  field_type,
}) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="relative z-0 w-full group">
      <input
        type={field_type}
        name={field_id}
        id={field_id}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        onChange={(event) => handleChange(field_id, event)}
      />
      <label
        htmlFor="floating_phone"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {field_label}
      </label>
    </div>
  );
};

export default Telephone;
