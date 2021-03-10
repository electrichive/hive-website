import React from "react";
import { Link } from "gatsby";
import * as buttonStyles from "./button.module.css";

/**
 * Component for a standard button (has url, theme and text prop)
 * @returns JSXElement 
 */


export default function Button(props){
  //two styles of button can be passed through prop
  const theme = props.theme === "light" ? buttonStyles.light : buttonStyles.dark;
  
  return (
      <Link to={props.url} className={`${theme} ${buttonStyles.button}`}>
        {props.text}
      </Link>
  );

}