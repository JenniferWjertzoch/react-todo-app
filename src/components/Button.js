import React from "react";

export default function Button({ className, label, onClick }) {
  return (
    <div className="button">
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
