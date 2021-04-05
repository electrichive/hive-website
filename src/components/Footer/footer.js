import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import * as footerStyles from "./footer.module.css";

/**
 * Component for a responsive footer (tabs and links along the bottom)
 * Icons may use font awesome integration
 * Sitemap to use graphql to pull in data
 * @returns JSXElement 
 */
 export default function Footer({sitemapItems}) {

  // query site metadata for predefined items on the navbar
  const query = graphql`
    query {
      site {
        siteMetadata {
          navbar {
            items
          }
        }
      }
    }
  `;

  // Data passed as props will override the GraphQL query
  const items = sitemapItems ?? useStaticQuery(query).site.siteMetadata.navbar.items;

  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.footerColumns}>
        <div className={footerStyles.sitemap}>
          <p><strong>Sitemap</strong></p>
          {/* Loop through and generate navbar items returned from `data` */}
          {items.map(([label, link]) => (
          <Link to={link} style={{ textDecoration: 'none' }}>
            <p className={footerStyles.sitemap_item}>
              {label}
            </p>
          </Link>
          ))}





        </div>
        <div className={footerStyles.footerContact}>
          <p><strong>Contact Us</strong></p>
          <p><strong>Email:</strong>info@electrichive.com</p>
          <p><strong>Telephone:</strong>12345 678900</p>
          <p><strong>Address:</strong>1 Test Ave, SP9 7UF</p>
        </div>
        <div className={footerStyles.socialMedia}>
          <p><strong>Get Social</strong></p>
          <a href={"#"}><span><i>F</i></span></a>
          <a href={"#"}><span><i>T</i></span></a>
          <a href={"#"}><span><i>L</i></span></a>
          <a href={"#"}><span><i>I</i></span></a>
        </div>
        <img src={"/logo.svg"} />
      </div>
      <div className={footerStyles.copyright}>
        <p>Copyright 2021 The Electric Hive | Developed by The Electric Hive</p>
      </div>
    </div>
  );
 }