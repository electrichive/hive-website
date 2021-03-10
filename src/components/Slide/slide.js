import React from "react";
import { Link } from "gatsby"
import * as slideStyles from "./slide.module.css";

/**
 * Component for a top slide (Hero image with main call to action)
 * @returns JSXElement 
 */

const SlideButton = () => {
  return (
    <div className={slideStyles.button}>
      <Link to="/mentorship" className={slideStyles.buttonText}>Join The <br /> Hive</Link>
    </div>
  );
};

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