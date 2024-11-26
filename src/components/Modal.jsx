import React from "react";
import Button from "./Button";
import classNames from "classnames";

const Modal = ({ title, description, children, theme, onClose, onSave }) => {
  return (
    <div
      className={classNames(
        "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
        theme === "light" ? "text-gray-800" : "text-white"
      )}
    >
      <div
        className={classNames(
          "w-full max-w-md p-6 rounded-xl shadow-lg",
          theme === "light" ? "bg-white" : "bg-gray-800"
        )}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button className="text-gray-500 hover:text-gray-800" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Modal Description */}
        {description && <p className="text-sm mb-4">{description}</p>}

        {/* Modal Children */}
        {children && <div className="mb-6">{children}</div>}

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button variant="secondary" size="small" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="small" onClick={onSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;