import React from "react";
import Input from "./Elements/Input";
import Checkbox from "./Elements/Checkbox";
import Select from "./Elements/Select";

const Element = ({
  field: {
    field_id,
    field_mandatory,
    field_label,
    field_placeholder,
    field_value,
    field_type,
  },
}) => {
  switch (field_type) {
    case "text":
      return (
        <Input
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );

    case "checkbox":
      return (
        <Checkbox
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "textarea":
      return (
        <Checkbox
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "select":
      return (
        <Select
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_value={field_value}
        />
      );

    default:
      return null;
  }
};

export default Element;
