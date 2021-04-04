import React from "react";
import Testimonial from "./testimonial";
import * as testiStyles from "./testimonial.module.css";
import Data from "./content.json"

/**
 * Component for a standard testimonial block module ()
 * retrieves data from JSON
 * Picks its data at random using function
 * @returns JSXElement 
 */

const randomNumberGen = () =>{
  //Gets random number between 0 and total number of testimonials
  return Math.floor(Math.random() * Data.testimonials.length);
}

const randomTestimonialPicker = () => {
  const chosen = []; //Will hold the 3 chosen testimonials

  while (chosen.length < 3) {
    let randomNumber = randomNumberGen();
    let alreadyTaken = false;


    //Loop will (crudely) pick 3 unique entries retrying if it gets one wrong
    //Worth revisiting when we have a large number of testimonials
    if(chosen.length === 0){
      chosen.push(randomNumber);
    } else {
      chosen.forEach(num => {
        if(randomNumber === num){
          alreadyTaken = true;
        }
      });
      if(!alreadyTaken){
        chosen.push(randomNumber);
      }
    }
  }
  return chosen;
}

export default function Testimonials(){

  // Get random numbers to choose from the testimonials
  const chosen = randomTestimonialPicker();

  return (
    <div className={testiStyles.testimonialsContainer}>
      <h2>What do others think?</h2>
      <Testimonial img={Data.testimonials[chosen[0]].img} 
                   author={Data.testimonials[chosen[0]].author} 
                   content={Data.testimonials[chosen[0]].content}
                   direction="left" />
      <Testimonial img={Data.testimonials[chosen[1]].img} 
                   author={Data.testimonials[chosen[1]].author} 
                   content={Data.testimonials[chosen[1]].content}
                   direction="right" />
      <Testimonial img={Data.testimonials[chosen[2]].img} 
                   author={Data.testimonials[chosen[2]].author} 
                   content={Data.testimonials[chosen[2]].content}
                   direction="left" />
    </div>
  );
}