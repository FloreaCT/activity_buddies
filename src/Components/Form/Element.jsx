import React from "react";
import Input from "./Elements/Input";
import Checkbox from "./Elements/Checkbox";
import Select from "./Elements/Select";
import Number from "./Elements/Number";
import Textarea from "./Elements/Textarea";
import File from "./Elements/File";
import DateInput from "./Elements/DateInput";
import Telephone from "./Elements/Telephone";
import Email from "./Elements/Email";
import Password from "./Elements/Password";

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
          field_type={field_type}
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
          field_type={field_type}
        />
      );
    case "textarea":
      return <Textarea field_label={field_label} field_id={field_id} />;
    case "select":
      return (
        <Select
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_value={field_value}
          field_type={field_type}
        />
      );
    case "number":
      return (
        <Number
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_value={field_value}
          field_type={field_type}
        />
      );
    case "file":
      return (
        <File
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_value={field_value}
          field_type={field_type}
        />
      );
    case "date":
      return (
        <DateInput
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_value={field_value}
          field_type={field_type}
        />
      );
    case "tel":
      return (
        <Telephone
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_value={field_value}
          field_type={field_type}
        />
      );
    case "email":
      return (
        <Email
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_value={field_value}
          field_type={field_type}
        />
      );
    case "password":
      return (
        <Password
          field_id={field_id}
          field_mandatory={field_mandatory}
          field_label={field_label}
          field_value={field_value}
          field_type={field_type}
        />
      );

    default:
      return null;
  }
};

export default Element;
