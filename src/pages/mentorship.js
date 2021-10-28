import React from "react";
import Layout from "../components/Layout/layout";
import Slide from "../components/Slide/slide";
import Parallax from "../components/Parallax/parallax";
import InfoBox from "../components/Infobox/infobox";
import InfoImages from "../components/Infoimage/infoimages";
import Content from "./content/home.json";

//Content for blocks is pulled from JSON in the folder "content"

export default function Mentorship() {
  return (
    <Layout>
      <Slide title="Mentorship Program" subtitle="Subtitle Mission Statement" button="true"/>
      <InfoImages />
      <Parallax url={"./mentorship"} text={"Sign Up"} img={"./img/stock-code1.jpg"} content={"Join Our Mentorship Program Now"}/>
      <InfoBox title={"Contribute To Our FOSS"} description={Content.infobox.description} theme={"dark"}/>
    </Layout>
  );
}
