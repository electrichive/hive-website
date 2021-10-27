import React from "react";
import Layout from "../components/Layout/layout";
import Slide from "../components/Slide/slide";
import Parallax from "../components/Parallax/parallax";
import InfoBox from "../components/Infobox/infobox";
import InfoImages from "../components/infoimage/infoimages";

export default function Home() {
  return (
    <Layout>
      <Slide title="The Electric Hive" subtitle="Subtitle Mission Statement" button="true"/>
      <InfoImages />
      <Parallax url={"./mentorship"} text={"Sign Up"} img={"./img/stock-code1.jpg"} content={"Join Our Mentorship Program Now"}/>
      <InfoBox title={"Contribute To Our FOSSS"} description={"Lorem Ipsum"} theme={"dark"}/>
    </Layout>
  );
}
