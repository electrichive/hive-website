import React, { useLayoutEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as styles from './honeycomb.module.css';

// how many hexes to include in the honeycomb
const totalHexes = 18;
// valid hex numbers that a social icon can sit on
const viableHexIndices = [0, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 16];

// Proportion equal amounts (n = 5) of the different shades of orange
const oranges = ['orange-light', 'orange-med', 'orange-dark', 'golden'];
const colorNames = ['white', 'gray-light', 'gray-dark', 'black', ...oranges];
const proportionedOranges = oranges.reduce(
    (arr, c) => [...arr, ...Array(5).fill(c)],
    []
);

/**
 * Shuffles an array of items unique to the application. Uses a random
 * switching alorithm in O(n) time.
 * @param {(string || number)[]} items_ - Array of strings or numbers to be
 * shuffled (esp. 'proportionedOranges' for color names and 'viable...
 * Indices')
 * @returns a correctly pseudo-randomized array from the same array
 */
function shuffle(items_) {
    let items = items_.slice();
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}

/**
 * One hexagonal element of the honeycomb
 * @param {color} color - Background color
 * @param {string?} socialUrl - Optional link to a social media website profile
 * @param {string?} picUrl - Optional reference to a static icon svg
 * corresponding to the socialUrl
 * @returns JSXElement
 */
function HoneycombHex({ color, socialUrl, picUrl }) {
    const hasSocialIcon = socialUrl && picUrl;

    // Extracts domain name for img alt-tagging accessibility (if there is a
    // social icon) using regex
    const domain = hasSocialIcon
        ? /^https:.+([a-z]+)\.(?!com|org|net)/.exec(socialUrl)
        : null;

    return (
        <div className={`${styles.item}`}>
            <div className={styles.outer}>
                <div
                    className={styles.inner}
                    style={{ backgroundColor: color }}
                >
                    {hasSocialIcon && (
                        <a href={socialUrl} className={styles.icon}>
                            <img src={picUrl} alt={domain} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
HoneycombHex.propTypes = {
    color: PropTypes.string.isRequired,
    socialUrl: PropTypes.string,
    picUrl: PropTypes.string,
};

/**
 * Semi-randomized honeycomb component generally located near the bottom of each
 * page. This is an iconic visual for the site and has centrally motivated the
 * color scheme.
 * @param {<{ socialUrl: string, picUrl: string }>[]} socials - List of two-link
 * list pairs representing social media profiles and corresponding display icons
 * @returns
 */
function Honeycomb({ socialProps }) {
    // ordered array of color hexcodes corresponding to each hexagon in honeycomb
    const [state, setState] = useState([]);

    // prefer props, otherwise run a static query on default metadata
    const query = graphql`
        query {
            site {
                siteMetadata {
                    honeycomb {
                        socials {
                            socialUrl
                            picUrl
                        }
                    }
                }
            }
        }
    `;
    const socials =
        socialProps ??
        useStaticQuery(query).site.siteMetadata.honeycomb.socials;

    // before the first rendering, pull the actual colors from the document and
    // assign 'state' to the shuffled array of proportioned color names above.
    // combine this with a similarly shuffled random position for each social
    // icon and set the full state
    useLayoutEffect(() => {
        const docStyle = getComputedStyle(document.body);
        const domColors = colorNames.reduce(
            (obj, color) => ({
                ...obj,
                [color]: docStyle.getPropertyValue(`--${color}`),
            }),
            {}
        );
        const state_ = shuffle(proportionedOranges)
            .slice(0, totalHexes)
            .map(color => ({ color: domColors[color] }));

        const socialIndices = shuffle(viableHexIndices).slice(
            0,
            socials.length
        );
        socials.forEach((social, i) => {
            state_[socialIndices[i]] = {
                ...state_[socialIndices[i]],
                ...social,
            };
        });
        setState(state_);
    }, [socials]);

    return (
        <div className={styles.honeycomb}>
            {state.map((itemState, i) => (
                <HoneycombHex key={i} {...itemState} />
            ))}
        </div>
    );
}
Honeycomb.propTypes = {
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            socialUrl: PropTypes.string.isRequired,
            picUrl: PropTypes.string.isRequired,
        })
    ),
};

export default Honeycomb;
