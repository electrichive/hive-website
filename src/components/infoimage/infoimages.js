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
      <InfoImage img={Data.infoimages[chosen[0]].img} 
                   content={Data.infoimages[chosen[0]].content}
                   direction="left" />
      <InfoImage img={Data.infoimages[chosen[1]].img} 
                   content={Data.infoimages[chosen[1]].content}
                   direction="right" />
      <InfoImage img={Data.infoimages[chosen[2]].img} 
                   content={Data.infoimages[chosen[2]].content}
                   direction="left" />
    </div>
  );
}