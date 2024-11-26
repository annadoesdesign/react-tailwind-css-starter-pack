import React, { useState } from "react";
import Pill from "./Pill.jsx";
import { useThemeContext } from "../ThemeContext.jsx";

const ComboBox = ({
  options = [],
  placeholder = "Select an option...",
  size = "md",
  theme: propTheme,
}) => {
  const contextTheme = useThemeContext();
  const theme = propTheme || contextTheme;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const sizeClasses = {
    sm: "h-6 text-sm px-2",
    md: "h-8 text-base px-3",
    lg: "h-10 text-lg px-4",
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative flex items-center w-full max-w-md shadow border rounded-md ${sizeClasses[size]}`}
      style={{
        backgroundColor: theme === "light" ? "var(--bg)" : "var(--dark-bg)",
        borderColor: theme === "light" ? "var(--border)" : "var(--dark-border)",
        color: theme === "light" ? "var(--text)" : "var(--dark-text)",
      }}
    >
      {/* Input */}
      <div
        className="flex grow items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className="truncate"
          style={{
            lineHeight: "18px", // Ensures the text is 18px high
          }}
        >
          {selectedOption?.label || placeholder}
        </div>
        <div
          className="ml-2 flex items-center justify-center"
          style={{
            width: "20px", // Sets the width for the arrow container
            height: "20px", // Sets the height for the arrow container
          }}
        >
          &darr;
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full mt-1 border rounded-md shadow-lg z-10"
          style={{
            backgroundColor: theme === "light" ? "var(--bg-surface)" : "var(--dark-bg-surface)",
            borderColor: theme === "light" ? "var(--border)" : "var(--dark-border)",
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`px-3 py-2 cursor-pointer hover:bg-opacity-50 ${
                theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"
              }`}
            >
              {option.icon && <span className="mr-2">{option.icon}</span>}
              <span>{option.label}</span>
              {option.subtext && (
                <span
                  className="block text-xs opacity-70"
                  style={{
                    color: theme === "light"
                      ? "var(--text-secondary)"
                      : "var(--dark-text-secondary)",
                  }}
                >
                  {option.subtext}
                </span>
              )}
              {option.pills && (
                <div className="mt-1 flex gap-1">
                  {option.pills.map((pill, i) => (
                    <Pill
                      key={i}
                      color={pill.color}
                      size="small"
                      theme={theme}
                    >
                      {pill.text}
                    </Pill>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComboBox;