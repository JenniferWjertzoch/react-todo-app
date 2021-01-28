import React from "react";

export default function Checkbox({ checked, onChange, label }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.setState(e.target.value);
    }
  };

  return (
    <div className="checkbox">
      <div
        className="border"
        onClick={() => onChange(!checked)}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex="0"
      >
        <div className={`indicator ${checked ? "checked" : ""}`}></div>
      </div>
      <div className="label">{label}</div>
    </div>
  );
}
