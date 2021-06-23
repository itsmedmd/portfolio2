import React from "react";
import "./formField.scss";

export const FormField = ({
  fieldFor,
  fieldType,
  labelText,
  handleChange,
  isRequired,
  isTextArea,
  fieldClassName,
}) => {
  const properties = {
    type: fieldType,
    id: fieldFor,
    name: fieldFor,
    onChange: handleChange,
  };

  if (isRequired) {
    properties.required = true;
  }

  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={fieldFor}>
        {labelText}
      </label>
      {isTextArea ? (
        <textarea
          className={`form-field__textarea ${
            fieldClassName ? fieldClassName : ""
          }`}
          {...properties}
        />
      ) : (
        <input
          className={`form-field__input ${
            fieldClassName ? fieldClassName : ""
          }`}
          {...properties}
        />
      )}
    </div>
  );
};
