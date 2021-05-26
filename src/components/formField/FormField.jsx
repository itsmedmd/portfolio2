import React from "react";
import "./formField.scss";

export const FormField = ({
    fieldFor,
    type,
    labelText,
    handleChange,
    isRequired,
    isTextArea
}) => {
    const properties = {
        type: type,
        id: fieldFor,
        name: fieldFor,
        onChange: handleChange
    };

    if(isRequired) {
        properties.required = true;
    };

    return (
        <div className="form-field">
            <label className="form-field__label" htmlFor={fieldFor}>
                {labelText}
            </label>
            {
                isTextArea ? 
                <textarea className="form-field__textarea"{...properties}/> :
                <input className="form-field__input" {...properties}/>
            }

        </div>
    );
};
