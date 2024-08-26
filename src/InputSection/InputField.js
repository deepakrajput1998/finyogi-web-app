import React from "react";
import "./inputField.css";

function InputField({
  label,
  inputType,
  placeholder,
  maxLength,
  onChangeHandler,
  value,
  name,
}) {
  switch (inputType) {
    case "checkbox":
      return (
        <>
          <label className="remember--checkbox">
            <div className="checkbox--box" />
            <input
              name={name}
              type={inputType}
              checked={value}
              onChange={(e) => {
                const { name, checked } = e.target;
                // e.preventDefault();
                // console.log(e.target.checked);
                onChangeHandler(name, checked);
              }}
            />
            <span className="remember--text">{label}</span>
          </label>
        </>
      );

    default:
      return (
        <>
          <div className="input--control">
            {label && (
              <label className="input--label" htmlFor={label}>
                {label}
              </label>
            )}
            <input
              name={name}
              onChange={(e) => {
                e.preventDefault();
                const { name, value } = e.target;
                onChangeHandler(name, value);
              }}
              value={value}
              type={inputType}
              className="input--field"
              placeholder={placeholder}
              id={label}
              maxLength={maxLength}
            />
          </div>
        </>
      );
  }
}

export default InputField;
