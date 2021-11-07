import React from "react";
import * as introStyles from "./intro.module.css";

/**
 * Component for a introdoction container module (has an title & content prop)
 * @returns JSXElement 
 */


export default function Intro(props){

  return (
    <div className={introStyles.introContainer}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );

}