import React from "react";
import * as iiStyles from "./infoimage.module.css";

/**
 * Component for a standard infoimage module (has an image and content prop)
 * is passed data from the infoimages module
 * @returns JSXElement 
 */


//image div has inline style as the URL cannot be passed to css
export default function InfoImage(props){

  //This determines which component is the right aligned one.
  const direction = props.direction === "right" ? iiStyles.right : iiStyles.left;
  const bgDirection = props.direction === "right" ? iiStyles.bgright : "";

  return (
    <div className={iiStyles.infoimageContainer}>
      <div className={`${direction} ${iiStyles.hexContainer}`}>
        <div style={{backgroundImage:`url(${props.img})`}} className={`${iiStyles.image}`}></div>
        <div className={`${bgDirection} ${iiStyles.infoimageBg}`}></div>
      </div>
      <div className={iiStyles.infoimageContentContainer}>
        <p className={iiStyles.infoimageContent}>{props.content}</p>
      </div>
    </div>
  );
}