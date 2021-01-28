import React from "react";

export default function Input({
  className,
  placeholder,
  value,
  onChange,
  type,
}) {
  return (
    <div className="input">
      <input
        className={className}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
