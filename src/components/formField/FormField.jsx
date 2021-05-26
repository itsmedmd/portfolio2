import React from "react";
import "./formField.scss";

export const FormField = ({ fieldFor, labelText, children }) => {
  return (
      <div className="form-field">
        <label htmlFor={fieldFor}>{labelText}</label>
        {children}
      </div>
  );
};
