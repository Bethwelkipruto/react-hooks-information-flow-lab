// javascript
import React from "react";

function Filter({ onCategoryChange }) {
  return (
    <select role="combobox" onChange={e => onCategoryChange && onCategoryChange(e.target.value)}>
      <option value="">All</option>
      <option value="Dairy">Dairy</option>
      <option value="Produce">Produce</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;