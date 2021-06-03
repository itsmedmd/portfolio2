import React, { useState } from "react";
import "./formLoader.scss";

export const FormLoader = ({
  status,
  defaultStatus,
  successStatus,
  errorStatus,
  fadeTimeoutTime,
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  if (status === successStatus || status === errorStatus) {
    setTimeout(() => setIsFadingOut(true), fadeTimeoutTime);
  } else if (isFadingOut) {
    setIsFadingOut(false);
  }

  return (
    <div
      className={`
          form-overlay
          ${status === defaultStatus ? " form-overlay--disabled" : ""}
          ${isFadingOut ? " form-overlay--fade-out" : ""}
      `}
    >
      {status === successStatus ? (
        <div className="form-overlay__success">&#10004;</div>
      ) : status === errorStatus ? (
        <div className="form-overlay__error">&#10006;</div>
      ) : (
        <div className="form-overlay__loader"></div>
      )}
      <p className="form-overlay__text">{status}</p>
    </div>
  );
};
