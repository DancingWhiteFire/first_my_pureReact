import React, { useState, createContext } from "react";
import lang from "./lang/Index";
import clr from "./color/Index";

export const language = lang;
// export const languageContext = createContext(language.en);

export const colorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState(clr.primary);
  console.log(typeof color, color);
  const handleColor = (type) => {
    switch (type) {
      case "primary":
        setColor((pre) => clr.primary);
        break;
      default:
        setColor((pre) => clr.success);
        break;
    }
  };

  return (
    <colorContext.Provider value={{ color, handleColor }}>
      {children}
    </colorContext.Provider>
  );
};
