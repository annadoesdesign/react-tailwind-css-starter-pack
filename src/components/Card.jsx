import React, { useState } from "react";
import Pill from "./Pill.jsx";
import Avatar from "./Avatar.jsx";
import Button from "./Button.jsx";

const Card = ({ 
  avatar, 
  title = "Title", 
  subtitle = "Subtitle", 
  pillProps = {}, 
  children, 
  theme 
}) => {
  const [showChildren, setShowChildren] = useState(false); // State to toggle children visibility

  // Resolve theme and styles
  const resolvedTheme = theme || "light";
  const backgroundColor = resolvedTheme === "light" ? "var(--bg)" : "var(--dark-bg)";
  const textColor = resolvedTheme === "light" ? "var(--text)" : "var(--dark-text)";
  const subTextColor = resolvedTheme === "light" ? "var(--text-secondary)" : "var(--dark-text-secondary)";

  return (
    <div
      style={{
        backgroundColor,
        borderColor: "var(--border)",
        color: textColor,
      }}
      className="w-[324px] h-auto p-4 rounded-xl shadow border flex flex-col gap-4"
    >
      {/* Header Section */}
      <div className="flex items-center gap-3">
        {avatar && (
          <Avatar
            image={avatar && typeof avatar === "string" ? avatar : undefined}
            initials={avatar && typeof avatar !== "string" ? avatar : "U"} // Default to "U" if no avatar
            size="xl"
            theme={resolvedTheme}
          />
        )}
        <div className="flex flex-col gap-0">
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{title}</h3>
            {pillProps && (
              <Pill {...pillProps} theme={resolvedTheme} size={pillProps.size || "small"} color={pillProps.color || "green"}>
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
              onClick={() => setShowChildren((prev) => !prev)} // Functional state update
            >
              {showChildren ? "Hide Details" : "Show Details"}
            </Button>
          </div>
        </div>
      </div>

      {/* Children Content */}
      {showChildren && <div className="rounded-md p-2">{children}</div>}
    </div>
  );
};

export default Card;