import React from "react";
import Pill from "./Pill.jsx";
import Avatar from "./Avatar.jsx";

const Card = ({ 
  avatar, 
  title = "Title", 
  subtitle = "Subtitle", 
  pillProps = {}, // Ensure pillProps is destructured with a default
  children, 
  theme 
}) => {
  const backgroundColor = theme === "light" ? "var(--bg)" : "var(--dark-bg)";
  const textColor = theme === "light" ? "var(--text)" : "var(--dark-text)";
  const subTextColor = theme === "light" ? "var(--text-secondary)" : "var(--dark-text-secondary)";

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderColor: "var(--border)",
        color: textColor,
      }}
      className="w-[324px] h-auto p-4 rounded-xl shadow border flex flex-col gap-4"
    >
      {/* Header Section */}
      <div className="flex items-center gap-3">
        {avatar && (
         <Avatar
         image={typeof avatar === "string" ? avatar : undefined} // Use avatar as image if it's a string, otherwise fall back to initials
         initials={typeof avatar !== "string" ? avatar : undefined} // Use avatar as initials if it's not a string
         size="xl" // Use 32px (lg size)
         theme={theme} // Pass the theme to ensure dynamic styling
       />
        )}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{title}</h3>
            {pillProps && (
              <Pill {...pillProps} theme={theme}>
                {pillProps.text || "Default Pill Text"}
              </Pill>
            )}
          </div>
          <p style={{ color: subTextColor }} className="text-sm">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Children Content */}
      {children && <div className="rounded-md p-2">{children}</div>}
    </div>
  );
};

export default Card;