import React, { createContext } from "react";
import UseToggler from "../hooks/UseToggler";
export const ThemeContext = createContext();

export const ThemeProivider = (props) => {
  const [darkMode, toggle] = UseToggler();
  return (
    <ThemeContext.Provider value={{ darkMode, toggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
