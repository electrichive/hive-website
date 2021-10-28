import React from "react";
import Intro from "../components/Intro/intro";
import Slide from "../components/Slide/slide";
import Layout from "../components/Layout/layout";
import Button from "../components/Button/button";
import Testimonials from "../components/Testimonial/testimonials";
import * as aboutStyles from "./styles/about.module.css";
import Content from "./content/about.json";

//Blocks specific to the about page so created here
const InfoBlock = (props) => {
  const theme = props.theme === "light" ? aboutStyles.light : aboutStyles.dark;
  return (
    <div className={`${theme} ${aboutStyles.infoBlock}`}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <Button theme={props.buttonTheme} text={props.buttonText} url={props.buttonUrl}/>
    </div>
  );
}

export default function About(){
  return (
    <Layout>
      <Slide title="About Us" subtitle="Subtitle Mission Statement" button="true"/>
      <Intro title={Content.intro.title} content={Content.intro.content} />
      <div className={aboutStyles.infoBlockContainer}>
        <InfoBlock theme="light" title={Content.infoblocks[0].title} text={Content.infoblocks[0].text} buttonTheme="dark" buttonText="Sign Up" buttonUrl="/mentorship" />
        <InfoBlock theme="dark" title={Content.infoblocks[1].title} text={Content.infoblocks[1].text} buttonTheme="light" buttonText="Contribute" buttonUrl="/foss" />
      </div>
      <Testimonials />
    </Layout>
  );
}