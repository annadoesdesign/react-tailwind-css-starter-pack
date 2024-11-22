import React from "react";
import useTheme from "./hooks/useTheme";

const Pill = ({ children, color = "default", rounded = "full" , theme }) => {
  
  const variablePrefix = theme === "dark" ? "--dark-tags" : "--tags";
  console.log (theme)

  const borderRadius = rounded === "4px" ? "4px" : "9999px";
  const backgroundColor = `var(${variablePrefix}-${color}-bg)`;
  const textColor = `var(${variablePrefix}-${color}-text)`;
  const borderColor = `var(${variablePrefix}-${color}-border)`;

  // Debugging log
  console.log("Pill Styles:", { theme, backgroundColor, textColor, borderColor });

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: textColor,
        borderRadius: borderRadius,
      }}
      className="h-6 px-2 border justify-center items-center gap-1 inline-flex"
    >
      <div className="text-xs font-semibold font-['SF Pro']">{children}</div>
    </div>
  );
};

export default Pill;