import React from "react";
import { Link } from "gatsby";
import * as slideStyles from "./slide.module.css";


export default function Button(props){
  //two styles of button can be passed through prop
  let theme = props.theme === "light" ? slideStyles.light : slideStyles.dark;
  
  return (
      <Link to={props.url} className={theme}>
        {props.text}
      </Link>
  );

}