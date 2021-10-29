import React from "react";
import Layout from "../components/Layout/layout";
import Slide from "../components/Slide/slide";
import Button from "../components/Button/button";
import Intro from "../components/Intro/intro";
import Parallax from "../components/Parallax/parallax";
import Testimonials from "../components/Testimonial/testimonials";
import * as mentorStyles from "./styles/mentor.module.css";
import Content from "./content/mentorship.json";

const MentorBlock = (props) => {
  const theme = props.theme === "light" ? mentorStyles.light : mentorStyles.dark;
  const themeContrast = props.theme === "light" ? "dark" : "light";
  return (
    <div class={mentorStyles.mentorBlock}>
      <h2>{props.firsttitle}</h2>

      <h2>{props.secondtitle}</h2>

      <h2>Why not start now?</h2>
      <Button url="/jointhehive" theme={themeContrast} text="Become a Mentee" />
    </div>
  );
}

//Content for blocks is pulled from JSON in the folder "content"

export default function Mentorship() {
  return (
    <Layout>
      <Slide title="Mentorship Program" subtitle="Subtitle Mission Statement" button="true"/>
      <Intro title={Content.intro.title} content={Content.intro.content} />
      <Testimonials />
      <Parallax url={"./resources"} text={"View Our Resources"} img={"./img/stock-code1.jpg"}/>
    </Layout>
  );
}
