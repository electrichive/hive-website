import React from "react";
import Button from "../Button/button";
import * as paraStyles from "./parallax.module.css";

/**
 * Component for a standard parallax module (has an image, title(optional), text & link prop)
 * @returns JSXElement 
 */


//testimonialImage div has inline style as the URL cannot be passed to css
export default function Parallax(props){

  //Optional title prop
  const title = props.title ? `<h2>${props.title}</h2>` : "";

  return (
    <div style={{backgroundImage:`url(${props.img})`}} className={paraStyles.paraContainer}>
      {title}
      <Button url={props.url} text={props.text} theme={"light"} />
    </div>
  );

}