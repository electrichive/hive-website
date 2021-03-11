import React from "react";
import Header from "../Header/header";
import Honeycomb from "../Honeycomb/honeycomb";
import * as styles from "./layout.module.css";

/**
 * Component for a responsive header (logo & tabs along the bottom)
 * @returns JSXElement 
 */
export default function Layout({ children }) {

  return (
    <div className={styles.flow}>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
      <Honeycomb />
    </div>
  );
}