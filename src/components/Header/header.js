import React from "react";
import { useMeasure } from "react-use";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import * as styles from "./header.module.css";

/**
 * Component for a responsive header (logo & tabs along the bottom)
 * @returns JSXElement 
 */
export default function Header({ navbarItems }) {

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
  const items = navbarItems ?? useStaticQuery(query).site.siteMetadata.navbar.items;

  // saves the height of the navbar for dynamic UI calculations
  const [ref, { height }] = useMeasure();

  return (
    <div className={styles.bg}>
      <div className={styles.box}>
        <div className={styles.logo_container}>
          <Link to="/" className={styles.logo_link}>
            <img src={'/logo.svg'} alt="logo" className={styles.logo} />
          </Link>
        </div>
        <div ref={ref} className={styles.nav_bar}>

          {/* Loop through and generate navbar items returned from `data` */}
          {items.map(([label, link], i) => (
          <Link to={link} style={{ textDecoration: 'none' }}>
            <div key={i} className={styles.nav_item} style={{
              // dynamic navbar item accent bar width - adjusts on any resize
              borderBottomWidth: `${height*0.13}px` 
            }}>
              {label}
            </div>
          </Link>
          ))}
          
        </div>
      </div>
    </div>
  );
}