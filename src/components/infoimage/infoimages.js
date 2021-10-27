import React from "react";
import InfoImage from "./infoimage";
import * as iiStyles from "./infoimage.module.css";
import Data from "./content.json"

/**
 * Component for a standard infoimage block module ()
 * retrieves data from JSON
 * @returns JSXElement 
 */


export default function InfoImages(){

  return (
    <div className={iiStyles.infoimagesContainer}>
      <h2>What do others think?</h2>
      <Testimonial img={Data.testimonials[chosen[0]].img} 
                   content={Data.testimonials[chosen[0]].content}
                   direction="left" />
      <Testimonial img={Data.testimonials[chosen[1]].img} 
                   content={Data.testimonials[chosen[1]].content}
                   direction="right" />
      <Testimonial img={Data.testimonials[chosen[2]].img} 
                   content={Data.testimonials[chosen[2]].content}
                   direction="left" />
    </div>
  );
}