import React from "react";
import Slide from "../components/Slide/slide";
import Layout from "../components/Layout/layout";
import Button from "../components/Button/button";
import * as aboutStyles from "./styles/about.module.css";

//Blocks specific to the about page so created here
const InfoBlock = (props) => {
  const theme = props.theme === "light" ? aboutStyles.light : aboutStyles.dark;
  return (
    <div className={`${theme} ${aboutStyles.infoBlock}`}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <Button theme={props.buttonTheme} text={props.buttonText} url={props.buttonUrl}/>
    </div>
  );
}

export default function About(){
  return (
    <Layout>
      <Slide title="About Us" subtitle="Subtitle Mission Statement" button="true"/>
      <InfoBlock theme="light" title="Mentorship" text="Test" buttonTheme="dark" buttonText="Sign Up" buttonUrl="/mentorship" />
    </Layout>
  );
}