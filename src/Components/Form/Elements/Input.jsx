import React, { useContext } from "react";
import { FormContext } from "../FormContext";

const Input = ({
  field_id,
  field_mandatory,
  field_label,
  field_placeholder,
  field_value,
}) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="relative z-0 w-full mb-6 group">
      {/* <label
        htmlFor="email"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {field_label}
      </label> */}
      <input
        type="email"
        id="email"
        className=""
        aria-describedby="emailHelp"
        onChange={(event) => handleChange(field_id, event)}
        placeholder={field_placeholder ? field_placeholder : ""}
        // value={TO ADD HERE THE VALUE FROM THE DATABASE}
      />
      <div id="emailHelp" className="form-text">
        We will never share you email with anyone else.
      </div>
    </div>
  );
};

export default Input;
