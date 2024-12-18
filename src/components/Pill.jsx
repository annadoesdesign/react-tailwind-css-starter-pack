import React from "react";

const Pill = ({
  children,
  color = "default",
  rounded = "full",
  theme,
  size = "medium",
  leftIcon,
  rightIcon,
}) => {
  const variablePrefix = theme === "light" ? "--tags" : "--dark-tags";

  const sizeClasses = {
    small: "h-5 px-2 text-xs gap-1",
    medium: "h-6 px-3 text-sm gap-2",
    large: "h-8 px-4 text-base gap-2",
  };

  const roundedClass = rounded === "4px" ? "rounded-[4.5px]" : "rounded-full";

  const hasBorder = rounded === "4px";

  return (
    <div
      style={{
        backgroundColor: `var(${variablePrefix}-${color}-bg)`,
        color: `var(${variablePrefix}-${color}-text)`,
        ...(hasBorder && { borderColor: `var(${variablePrefix}-${color}-border)` }), // Apply border color only if hasBorder is true
      }}
      className={`inline-flex items-center justify-center ${roundedClass} ${sizeClasses[size]} ${
        hasBorder ? "border" : ""
      }`} // Conditionally add the "border" class
    >
      {leftIcon && (
        <span className="inline-flex items-center justify-center">{leftIcon}</span>
      )}
      <span className="font-semibold">{children}</span>
      {rightIcon && (
        <span className="inline-flex items-center justify-center">{rightIcon}</span>
      )}
    </div>
  );
};

export default Pill;