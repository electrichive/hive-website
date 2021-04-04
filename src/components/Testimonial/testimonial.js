import React from "react";
import { Link } from "gatsby";
import * as testiStyles from "./testimonial.module.css";

/**
 * Component for a standard testimonial module (has an image name and text prop)
 * is passed data from the testimonials module
 * @returns JSXElement 
 */

export default function Testimonial(props){
  return (
    <div className={"testimonialContainer"}>
      <img src={props.img} className={"testimonialImage"} />
      <p className={"testimonialContent"}>{props.content}</p>
      <h3 className={"testimonialAuthor"}>{props.author}</h3>
    </div>
  );
}