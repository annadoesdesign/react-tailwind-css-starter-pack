import React from "react";
import * as Components from ".";

const withLogger = (Component) => {
  return (props) => {
    console.group(`Component: ${Component.name}`);
    console.log("Props:", props);
    console.groupEnd();
    return <Component {...props} />;
  };
};

export const logAllComponents = (components) => {
  const loggedComponents = {};
  Object.keys(components).forEach((key) => {
    loggedComponents[key] = withLogger(components[key]);
  });
  return loggedComponents;
};

export { default as Button } from "./components/Button";
export { default as Card } from "./components/Card";
export { default as Avatar } from "./components/Avatar";
export { default as Pill } from "./components/Pill";