import React from "react";
import "./formLoader.scss";

export const FormLoader = ({
    status,
    defaultStatus,
    successStatus,
    errorStatus
}) => {
    return (
        <div
            className={`
                form-overlay
                ${status === defaultStatus ? " form-overlay--disabled" : ""}
            `}
        >
            {
                status === successStatus ?
                    <div className="form-overlay__success">&#10004;</div>
                : status === errorStatus ?
                    <div className="form-overlay__error">&#10006;</div>
                : <div className="form-overlay__loader"></div>
            }
            <p className="form-overlay__text">{status}</p>
      </div>
    );
};
