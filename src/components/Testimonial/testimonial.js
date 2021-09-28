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
      <h3 className={"testimonialTitle"}>{props.title}</h3>
      <p className={"testimonialContent"}>{props.content}</p>
    </div>
  );
}