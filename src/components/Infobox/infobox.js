import React from "react";
import * as infoStyles from "./infobox.module.css";

/**
 * Component for a standard info box module (has a title, desc and content(optional))
 * @returns JSXElement 
 */


export default function InfoBox(props){

  return (
    <div className={infoStyles.infoBlock}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className={infoStyles.content}>
        {props.content}
      </div>
    </div>
  );

}