import React from "react";
import Pill from "./Pill.jsx";
import Avatar from "./Avatar.jsx";

const Card = ({ 
  avatar, 
  title = "Title", 
  subtitle = "Subtitle", 
  pillProps = {}, // Ensure pillProps is destructured with a default
  children, 
  theme, 
  showChildren = false // Control visibility of children content
}) => {
  const backgroundColor = theme === "light" ? "var(--bg)" : "var(--dark-bg)";
  const textColor = theme === "light" ? "var(--text)" : "var(--dark-text)";
  const subTextColor = theme === "light" ? "var(--text-secondary)" : "var(--dark-text-secondary)";

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderColor: theme === "light" ? "var(--border)" : "var(--dark-border)",
        color: textColor,
      }}
      className="w-[324px] h-auto p-4 rounded-xl shadow border flex flex-col gap-4"
    >
      {/* Header Section */}
      <div className="flex items-center gap-3 grow">
        {avatar && (
          <Avatar
            image={typeof avatar === "string" ? avatar : undefined} // Use avatar as image if it's a string, otherwise fall back to initials
            initials={typeof avatar !== "string" ? avatar : undefined} // Use avatar as initials if it's not a string
            size="xl" // Use 32px (lg size)
            theme={theme} // Pass the theme to ensure dynamic styling
          />
        )}
        <div className="flex flex-col gap-0 grow">
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{title}</h3>
            {pillProps && (
              <Pill 
                size="small" 
                {...pillProps} 
                theme={theme}
              >
                {pillProps.text || "Default Pill Text"}
              </Pill>
            )}
          </div>
          {/* Subtitle and Icon Button */}
          <div className="flex grow items-center">
            <p style={{ color: subTextColor }} className="flex text-sm grow">
              {subtitle}
            </p>
            <button 
              className="p-1 rounded-full hover:bg-gray-200 flex grow-0" 
              onClick={() => alert("Icon button clicked!")}
              style={{
                backgroundColor: theme === "light" ? "var(--light-bg)" : "var(--dark-bg)",
                color: theme === "light" ? "var(--text)" : "var(--dark-text)",
              }}
            >
              {/* Replace this with your preferred icon */}
              <div className="material-icons justify-between">&rarr;</div>
             
            </button>
          </div>
        </div>
      </div>

      {/* Children Content */}
      {showChildren && children && <div className="rounded-md p-2">{children}</div>}
    </div>
  );
};

export default Card;