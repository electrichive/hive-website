import React from "react";
import { Link } from "gatsby";
import * as slideStyles from "./button.module.css";

/**
 * Component for a standard button (has url, theme and text prop)
 * @returns JSXElement 
 */


export default function Button(props){
  //two styles of button can be passed through prop
  let theme = props.theme === "light" ? slideStyles.light : slideStyles.dark;
  
  return (
      <Link to={props.url} className={`${theme} ${slideStyles.button}`}>
        {props.text}
      </Link>
  );

}