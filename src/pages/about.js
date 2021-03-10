import React from "react";
import Slide from "../components/Slide/slide";
import Layout from "../components/Layout/layout";
import Button from "../components/Button/button";

export default function About(){
  return (
    <Layout>
      <Slide title="About Us" subtitle="Subtitle Mission Statement" button="true"/>
      <Button theme="light" text="Join the Hive" url="/foss"/>
    </Layout>
  );
}