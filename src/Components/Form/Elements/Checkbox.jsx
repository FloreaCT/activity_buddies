import React from "react";

const Checkbox = (field_id, field_mandatory, field_label,  field_value) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type="checkbox"
        id="checkbox"
        className="form-control"
        aria-describedby="emailHelp"
      />
      <label
        htmlFor="checkbox"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Agree with our policies.
      </label>
    </div>
  );
};

export default Checkbox;
