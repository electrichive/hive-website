import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from './honeycomb.module.css';

/**
 * One hexagonal element of the honeycomb
 * @param {color} color - Background color
 * @param {string?} socialUrl - Optional link to a social media website profile 
 * @param {string?} picUrl - Optional reference to a static icon svg corresponding to the socialUrl
 * @returns JSXElement
 */
function HoneycombHex({ color, socialUrl, picUrl }) {
  return <div class={styles.hexagon}></div>;
}
HoneycombHex.propTypes = {
  color: PropTypes.string.isRequired,
  socialUrl: PropTypes.string,
  picUrl: PropTypes.string
};


/**
 * Semi-randomized honeycomb component generally located near the bottom of each page. This is an iconic visual for the site and has centrally motivated the color scheme.
 * @param {<{ socialUrl: string, picUrl: string }>[]} socials - List of two-link list pairs representing social media profiles and corresponding display icons
 * @returns 
 */
function Honeycomb({ socials }) {
  return <div class={styles.honeycomb}></div>;
}
Honeycomb.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.shape({
    socialUrl: PropTypes.string.isRequired,
    picUrl: PropTypes.string.isRequired
  }))
};

export default Honeycomb;