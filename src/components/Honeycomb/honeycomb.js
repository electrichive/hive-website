import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from './honeycomb.module.css';

const totalHexes = 18;

const oranges = ['orange-light', 'orange-med', 'orange-dark', 'golden'];
const colorNames = ['white', 'gray-light', 'gray-dark', 'black', ...oranges];
const proportionedOranges = oranges.reduce((arr, c) => [...arr, ...Array(5).fill(c)], []);

const docStyle = getComputedStyle(document.body);
const COLORS = colorNames.reduce(
  (obj, color) => ({ 
    ...obj, 
    [color]: docStyle.getPropertyValue(`--${color}`)
  }), {}
);

function shuffleColors(colors_) {
  let colors = colors_.slice();
  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]]
  }
  return colors;
}

/**
 * One hexagonal element of the honeycomb
 * @param {color} color - Background color
 * @param {string?} socialUrl - Optional link to a social media website profile 
 * @param {string?} picUrl - Optional reference to a static icon svg corresponding to the socialUrl
 * @returns JSXElement
 */
function HoneycombHex({ color, socialUrl, picUrl }) {

  const hasSocialIcon = socialUrl && picUrl;

  // Extracts domain name for img alt-tagging accessibility (if there is a social icon) using regex
  const domain = hasSocialIcon ? /^https:.+([a-z]+)\.(?!com|org|net)/.exec(socialUrl) : null;
  return (
    <div className={`${styles.hexagon} ${styles.outer}`}>
      <div className={`${styles.hexagon} ${styles.inner}`} style={{ backgroundColor: color }}>
        {hasSocialIcon && (
        <a href={socialUrl}>
          <img src={picUrl} alt={`${domain} profile for Electric Hive`}/>
        </a>
        )}
      </div>
    </div>
  );
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

  let idx = 0; // to be used for incrementing in an irregular honeycomb grid (COLORS[colors[idx++]])
  const colors = shuffleColors(proportionedOranges).slice(0, totalHexes);

  return (
    <div className={styles.honeycomb}>
      {Array(totalHexes).fill(0).map((val, i) => val + i).map(i => (
      <HoneycombHex color={COLORS[colors[i]]} />
      ))}
    </div>
  );
}
Honeycomb.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.shape({
    socialUrl: PropTypes.string.isRequired,
    picUrl: PropTypes.string.isRequired
  }))
};

export default Honeycomb;