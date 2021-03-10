import React from "react";
import Layout from "../components/Layout/layout";

export default function Home() {
  return (
    <Layout>
      <p>This is not the page you are looking for <span role="img" aria-label="alien :P">&#128125;</span></p>
      <img src={'/img/404.jpg'} alt="funny star wars reference"></img>
    </Layout>
  );
}
