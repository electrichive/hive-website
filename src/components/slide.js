import React from "react";
import SlideButton from "./slideButton";
import * as slideStyles from "../styles/slide.module.css";

export default function Slide(props){
  //If a button is needed for the slide, this parses the prop and adds.
  const button = props.button ? <SlideButton/> : "";

  return (
    <div className={slideStyles.slide}>
      <div className={slideStyles.slideContent}>
        <h1 className={slideStyles.title}>{props.title}</h1>
        <h2 className={slideStyles.subtitle}>{props.subtitle}</h2>
        {button}
      </div>
    </div>
  );
}