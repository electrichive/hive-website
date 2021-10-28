import React from "react";
import Layout from "../components/Layout/layout";
import Slide from "../components/Slide/slide";
import Intro from "../components/Intro/intro";
import Parallax from "../components/Parallax/parallax";
import Content from "./content/mentorship.json";

//Content for blocks is pulled from JSON in the folder "content"

export default function Mentorship() {
  return (
    <Layout>
      <Slide title="Mentorship Program" subtitle="Subtitle Mission Statement" button="true"/>
      <Intro title={Content.intro.title} content={Content.intro.content} />
      <Parallax url={"./resources"} text={"View Our Resources"} img={"./img/stock-code1.jpg"}/>
      <Testimonials />
    </Layout>
  );
}
