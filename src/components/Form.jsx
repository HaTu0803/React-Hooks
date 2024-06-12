import React from "react";
import { useTheme } from "../themes/ThemeContext";
import styles from "./styles";
const Form = ({ children, onSubmit }) => {
  const theme = useTheme();
  const formStyles = styles(theme);

  return (
    <form style={formStyles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
