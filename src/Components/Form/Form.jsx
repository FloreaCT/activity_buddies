import React, { useState, useEffect } from "react";
import formJSON from "./formElement.json";
import Element from "./Element";
import { FormContext } from "./FormContext";

const Form = () => {
  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(formJSON);
  }, []);
  1;

  const { fields, page_label } = elements ?? {};
  const handleSubmit = () => {
    console.log(elements);
  };

  const handleChange = (id, event) => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      const { field_type, field_id, field_value } = field;
      if (id === field_id) {
        field["field_value"] = event.target.value;
      }
      setElements(newElements);
    });
    console.log(elements);
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <>
        <h3>Register to Activity Buddies</h3>
        <form className="grid grid-cols-2 gap-4 max-w-[800px]">
          {fields
            ? fields.map((field, i) => <Element key={i} field={field} />)
            : null}

          <button type="submit">Save changes</button>
        </form>
      </>
    </FormContext.Provider>
  );
};

export default Form;
