import React, { useContext, useState } from "react";
import { FormContext } from "../FormContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = () => {
  const [startDate, setStartDate] = useState();
  const { handleChange } = useContext(FormContext);
  return (
    <div className="items-center justify-center text-[0.875rem]">
      <DatePicker
        selected={startDate}
        className="w-full border-b-2 border-gray-300"
        onChange={(date) => setStartDate(date)}
        placeholderText="Date of birth"
      />
    </div>
  );
};

export default DateInput;
