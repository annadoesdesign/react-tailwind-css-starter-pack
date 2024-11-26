import React, { useState } from "react";
import Pill from "./Pill"; // Use your existing Pill component

const ColorPicker = ({ colors, selectedColor, onSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {colors.map((color) => (
        <Pill
          key={color}
          color={color}
          className={`cursor-pointer ${
            selectedColor === color ? "border-primary ring-2 ring-primary" : ""
          }`}
          onClick={() => onSelect(color)}
        >
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Pill>
      ))}
    </div>
  );
};

export default ColorPicker;