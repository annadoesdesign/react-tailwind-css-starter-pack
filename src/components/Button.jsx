import React from "react";
import Pill from "./Pill.jsx";
import Avatar from "./Avatar.jsx";
import Button from "./Button.jsx";

const Card = ({ 
  avatar, 
  title = "Title", 
  subtitle = "Subtitle", 
  pillProps = {}, 
  children, 
  theme, 
  showChildren = false, // Control visibility externally
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
            image={typeof avatar === "string" ? avatar : undefined}
            initials={typeof avatar !== "string" ? avatar : undefined}
            size="xl"
            theme={theme}
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
          {/* Subtitle and Button on the Same Line */}
          <div className="flex justify-between items-center">
            <p style={{ color: subTextColor }} className="text-sm">
              {subtitle}
            </p>
            <Button
              size="small"
              variant="text"
              onClick={() => {
                console.log("Button clicked!"); // Log the click for debugging
                alert("Download clicked!"); // Example behavior
              }}
              leftIcon={<span className="material-icons">download</span>} // Material icon example
            />
          </div>
        </div>
      </div>

      {/* Children Content */}
      {showChildren && <div className="rounded-md p-2">{children}</div>}
    </div>
  );
};

export default Card;