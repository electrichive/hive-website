import React from "react";
import * as testiStyles from "./testimonial.module.css";

/**
 * Component for a standard testimonial module (has an image author and content prop)
 * is passed data from the testimonials module
 * @returns JSXElement 
 */


//testimonialImage div has inline style as the URL cannot be passed to css
export default function Testimonial(props){

  const direction = props.direction === "right" ? testiStyles.right : testiStyles.left;

  return (
    <div className={testiStyles.testimonialContainer}>
      <div style={{backgroundImage:`url(${props.img})`}} className={`${direction} ${testiStyles.testimonialImage}`}></div>
      <div className={testiStyles.testimonialContentContainer}>
        <p className={testiStyles.testimonialContent}>{props.content}</p>
        <h4 className={testiStyles.testimonialAuthor}>{props.author}</h4>
      </div>
    </div>
  );
}