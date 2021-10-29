import React from "react";
import Layout from "../components/Layout/layout";
import Slide from "../components/Slide/slide";
import Button from "../components/Button/button";
import Intro from "../components/Intro/intro";
import Parallax from "../components/Parallax/parallax";
import InfoImage from "../components/Infoimage/infoimage";
import Testimonials from "../components/Testimonial/testimonials";
import * as mentorStyles from "./styles/mentor.module.css";
import Content from "./content/mentorship.json";

//Local component as this only appears on the mentorship page
const MentorBlock = (props) => {
  const theme = props.theme === "light" ? mentorStyles.light : mentorStyles.dark;
  const themeContrast = props.theme === "light" ? "dark" : "light";
  return (
    <div class={`${theme} ${mentorStyles.mentorBlock}`}>
      <h2>{props.firsttitle}</h2>
      <div class={mentorStyles.mentorContent}>
        <InfoImage img={props.image} 
                   content={props.content}
                   direction="right" />
      </div>
      <h2>{props.secondtitle}</h2>
      <div class={mentorStyles.bullets}>
        <ul>
          {props.bullets.map(bullet => {
            return (<li>{bullet}</li>);
          })}
        </ul>
      </div>
      <h2>Why not start now?</h2>
      <Button url={props.url} theme={themeContrast} text="Become a Mentee" />
    </div>
  );
}

//Content for blocks is pulled from JSON in the folder "content"

export default function Mentorship() {
  return (
    <Layout>
      <Slide title="Mentorship Program" subtitle="Subtitle Mission Statement" button="true"/>
      <Intro title={Content.intro.title} content={Content.intro.content} />
      <MentorBlock theme="light" 
                   firsttitle={Content.MentorBlock[0].firsttitle}
                   secondtitle={Content.MentorBlock[0].secondtitle}
                   content={Content.MentorBlock[0].content}
                   image={Content.MentorBlock[0].image}
                   bullets={Content.MentorBlock[0].bullets}
                   url="/jointhehive"/>
      <MentorBlock theme="dark" 
                   firsttitle={Content.MentorBlock[1].firsttitle}
                   secondtitle={Content.MentorBlock[1].secondtitle}
                   content={Content.MentorBlock[1].content}
                   image={Content.MentorBlock[1].image}
                   bullets={Content.MentorBlock[1].bullets}
                   url="/jointhehive"/>
      <Testimonials />
      <Parallax url={"./resources"} text={"View Our Resources"} img={"./img/stock-code1.jpg"}/>
    </Layout>
  );
}
