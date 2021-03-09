import React from "react";
import SlideButton from "./slideButton";

export default function Slide(props){
  //If a button is needed for the slide, this parses the prop and adds.
  const button = props.button ? <SlideButton/> : "";

  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        {button}
      </div>
    </div>
  );
}