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

  //Perhaps find a loop for this
  return (
    <div className={iiStyles.infoimagesContainer}>
      <InfoImage img={Data.infoimages[0].img} 
                   content={Data.infoimages[0].content}
                   subtitle={Data.infoimages[0].subtitle}
                   direction="left" />
      <InfoImage img={Data.infoimages[1].img} 
                   content={Data.infoimages[1].content}
                   subtitle={Data.infoimages[1].subtitle}
                   direction="right" />
      <InfoImage img={Data.infoimages[2].img}
                   content={Data.infoimages[2].content}
                   subtitle={Data.infoimages[2].subtitle}
                   direction="left" />
    </div>
  );
}