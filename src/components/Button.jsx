import React from "react";

const Button = ({
  children,
  variant = "primary", // Supports primary, secondary, outline, and text
  size = "medium",
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  // Determine variable prefix based on variant
  const variablePrefix = `--button-${variant}`;

  // Tailwind classes for size
  const sizeClasses = {
    small: "h-8 px-4 text-sm",
    medium: "h-10 px-4 text-base",
    large: "h-12 px-6 text-lg",
  };

  // Tailwind classes for variants
  const variantClasses = {
    primary: `
      bg-[var(--button-primary-bg)] 
      text-[var(--button-primary-text)] 
      border-[var(--button-primary-border)] 
      hover:bg-[var(--button-primary-hover-bg)]
    `,
    secondary: `
      bg-[var(--button-secondary-bg)] 
      text-[var(--button-secondary-text)] 
      border-[var(--button-secondary-border)] 
      hover:bg-[var(--button-secondary-hover-bg)]
    `,
    outline: `
      bg-transparent 
      text-[var(--button-outline-text)] 
      border-[var(--button-outline-border)] 
      hover:bg-[var(--button-outline-hover-bg)]
    `,
    text: `
      bg-transparent 
      text-[var(--button-text-text)] 
      border-transparent 
      hover:bg-[var(--button-text-hover-bg)]
    `,
  };

  // Disabled styles
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:shadow-md active:shadow-none";

  // Focus styles (adds a ring or outline using the focus color variable)
  const focusClasses = "focus:outline-none focus:ring-2 focus:ring-[var(--purple-3)]";

  return (
    <button
      style={{
        color: `var(${variablePrefix}-text)`,
        borderColor: `var(${variablePrefix}-border)`,
      }}
      className={`inline-flex items-center justify-center border rounded transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${focusClasses}`}
      disabled={disabled}
      onClick={onClick}
    >
      {/* Left Icon */}
      {leftIcon && (
        <span className="inline-flex items-center justify-center mr-2">
          {leftIcon}
        </span>
      )}

      {/* Button Text */}
      <span className="font-semibold">{children}</span>

      {/* Right Icon */}
      {rightIcon && (
        <span className="inline-flex items-center justify-center ml-2">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;