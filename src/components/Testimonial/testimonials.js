import React from "react";#
import Testimonial from "./testimonial";
import { Link } from "gatsby";
import * as testiStyles from "./testimonial.module.css";
import Data from "./content.json"

/**
 * Component for a standard testimonial block module ()
 * retrieves data from JSON
 * @returns JSXElement 
 */

export default function Testimonials(props){
  return (
    <div className={"testimonialsContainer"}>
      <Testimonial img={Data.testimonials[0].img} 
                   author={Data.testimonials[0].author} 
                   content={Data.testimonials[0].content} />
      <Testimonial img={Data.testimonials[1].img} 
                   author={Data.testimonials[1].author} 
                   content={Data.testimonials[1].content} />
      <Testimonial img={Data.testimonials[2].img} 
                   author={Data.testimonials[2].author} 
                   content={Data.testimonials[2].content} />
    </div>
  );
}