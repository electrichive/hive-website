import React from "react";
import * as testiStyles from "./testimonial.module.css";

/**
 * Component for a standard testimonial module (has an image author and content prop)
 * is passed data from the testimonials module
 * @returns JSXElement 
 */

export default function Testimonial(props){
  return (
    <div className={testiStyles.testimonialContainer}>
      <img src={props.img} className={testiStyles.testimonialImage} />
      <p className={testiStyles.testimonialContent}>{props.content}</p>
      <h3 className={testiStyles.testimonialAuthor}>{props.author}</h3>
    </div>
  );
}