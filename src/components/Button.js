import React from "react";

function Button({ label, onClick, styleType }) {
  return (
    <button className={styleType} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
