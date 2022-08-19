import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function PageContent(props) {
  const { darkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: darkMode ? "black" : "white",
    height: "100vh",
    width: "100vw",
  };
  return <div style={styles}>{props.children}</div>;
}
