import React from "react";

export default function Slide(props){
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        {props.button ? "</slideButton>" : ""}
      </div>
    </div>
  )
}