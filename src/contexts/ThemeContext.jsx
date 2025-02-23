import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeWrapper = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeWrapper, ThemeContext };
