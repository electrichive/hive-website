import React from "react";
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
      <div className={aboutStyles.introContainer}>
        <h2>Who Are The Electric Hive?</h2>
        <p>Nullam laoreet pulvinar gravida. Aliquam auctor dolor urna, at mattis tortor dignissim vel. Proin eu velit ultrices arcu mattis consequat sit amet sed diam. Fusce odio leo, tristique quis lobortis vel, commodo id turpis. Phasellus dapibus massa in auctor venenatis. Donec erat erat, scelerisque sit amet mauris eu, euismod mattis mi. Nulla facilisi. Mauris eleifend ultrices velit ac sodales. Etiam accumsan finibus leo id hendrerit.</p>
      </div>
      <div className={aboutStyles.infoBlockContainer}>
        <InfoBlock theme="light" title={Content.infoblocks[0].title} text={Content.infoblocks[0].text} buttonTheme="dark" buttonText="Sign Up" buttonUrl="/mentorship" />
        <InfoBlock theme="dark" title={Content.infoblocks[1].title} text={Content.infoblocks[1].text} buttonTheme="light" buttonText="Contribute" buttonUrl="/foss" />
      </div>
      <Testimonials />
    </Layout>
  );
}