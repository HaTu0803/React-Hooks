import React from "react";
import { useTheme } from "../themes/ThemeContext";
import styles from "./styles";
const Card = ({ children, ...props }) => {
  const theme = useTheme();

  const stylesCard = styles(theme);
  return (
    <div style={stylesCard.card} {...props}>
      {children}
    </div>
  );
};

export default Card;
