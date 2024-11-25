import React from "react";
import { useThemeContext } from "./ThemeContext";

const Avatar = ({ size = "md", image, initials = "U", theme: propTheme }) => {
  const contextTheme = useThemeContext();
  const theme = propTheme || contextTheme;

  const variablePrefix = theme === "light" ? "--" : "--dark-";

  const sizeClasses = {
    xs: "w-3 h-3 text-xs", // 12px
    sm: "w-4 h-4 text-sm", // 16px
    md: "w-6 h-6 text-base", // 24px
    lg: "w-8 h-8 text-base", // 32px
    xl: "w-10 h-10 text-lg", // 40px
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full border ${selectedSize}`}
      style={{
        backgroundColor: `var(${variablePrefix}bg)`, // Dynamic variable for background
        borderColor: `var(${variablePrefix}border)`, // Dynamic variable for border
        color: `var(${variablePrefix}text)`, // Add other variables as needed
      }}
    >
      {image ? (
        <img
          src={image}
          alt="Avatar"
          className="rounded-full w-full h-full object-cover"
        />
      ) : (
        <span className="font-medium">{initials}</span>
      )}
    </div>
  );
};

export default Avatar;