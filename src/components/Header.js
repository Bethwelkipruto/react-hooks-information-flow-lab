// javascript
import React from "react";

function Header({ onDarkModeClick }) {
  return (
    <button onClick={onDarkModeClick}>
      Dark Mode
    </button>
  );
}

export default Header;