import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import * as footerStyles from "./footer.module.css";

/**
 * Component for a responsive footer (tabs and links along the bottom)
 * @returns JSXElement 
 */
 export default function Footer({  }) {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.footerColumns}>
        <div className={footerStyles.sitemap}>
          <p><strong>Sitemap</strong></p>
        </div>
        <div className={footerStyles.footerContact}>
          <p><strong>Contact Us</strong></p>
          <p><strong>Email:</strong>info@electrichive.com</p>
          <p><strong>Telephone:</strong>12345 678900</p>
          <p><strong>Address:</strong>1 Test Ave, SP9 7UF</p>
        </div>
        <div className={footerStyles.socialMedia}>
          <p><strong>Get Social</strong></p>
          <span><i>F</i></span>
          <span><i>T</i></span>
          <span><i>L</i></span>
          <span><i>I</i></span>
        </div>
        <img src={"/logo.svg"} />
      </div>
      <div className={footerStyles.copyright}>
        <p>Copyright 2021 The Electric Hive | Developed by The Electric Hive</p>
      </div>
    </div>
  );
 }