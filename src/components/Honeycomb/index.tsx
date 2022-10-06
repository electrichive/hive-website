import { useLayoutEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    Icon,
    Item,
    Inner,
    Outer,
    StyledHoneycomb,
    IconImage,
} from './honeycomb.styled';
import { shuffleItems, mapUrlsToProps } from 'src/utils';
import { useImageUrls } from 'src/graphql/queries/images';

// how many hexes to include in the honeycomb
const totalHexes = 18;
// valid hex numbers that a social icon can sit on
const viableHexIndices = [0, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 16];

// Proportion equal amounts (n = 5) of the different shades of orange
const oranges = ['beige', 'orange', 'darkorange', 'gold'];
const colorNames = ['white', 'gray-light', 'gray-dark', 'black', ...oranges];
const proportionedOranges = oranges.reduce(
    (arr, c) => [...arr, ...Array(5).fill(c)],
    []
);

/**
 * One hexagonal element of the honeycomb
 * @param color - Background color (should be hexcode formatted)
 * @param socialUrl - Optional link to a social media website profile
 * @param picUrl - Optional reference to a static icon svg
 * corresponding to the socialUrl
 */
export function HoneycombHex({
    color,
    socialUrl,
    img,
}: HoneycombHexProps): JSX.Element {
    const hasSocialIcon = !!socialUrl && !!img;

    // Extracts domain name for img alt-tagging accessibility (if there is a
    // social icon) using regex
    const regexp = /^https:\/\/(www\.)?(?<domain>[a-z]*)/;

    const domain = hasSocialIcon
        ? regexp.exec(socialUrl).groups['domain']
        : null;
    return (
        <Item>
            <Outer>
                <Inner color={color}>
                    {hasSocialIcon && (
                        <Icon href={socialUrl}>
                            <IconImage src={img} alt={domain} />
                        </Icon>
                    )}
                </Inner>
            </Outer>
        </Item>
    );
}

/**
 * Semi-randomized honeycomb component generally located near the bottom of each
 * page. This is an iconic visual for the site and has centrally motivated the
 * color scheme.
 * @param socials - List of two-link list pairs representing social media
 * profiles and corresponding display icons
 */
export default function Honeycomb({
    socialProps,
}: HoneycombProps): JSX.Element {
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
                            img
                        }
                    }
                }
            }
        }
    `;
    const images = useImageUrls();
    const socials =
        socialProps ??
        (useStaticQuery(query).site.siteMetadata.honeycomb
            .socials as SocialMetadata[]);
    const formattedSocials = mapUrlsToProps(images, socials);

    // before the first rendering, pull the actual colors from the document and
    // assign 'state' to the shuffled array of proportioned color names above.
    // combine this with a similarly shuffled random position for each social
    // icon and set the full state
    useLayoutEffect(() => {
        // const docStyle = getComputedStyle(document.body);
        // const domColors = colorNames.reduce(
        //     (obj, color) => ({
        //         ...obj,
        //         [color]: docStyle.getPropertyValue(`--${color}`),
        //     }),
        //     {}
        // );
        const state_ = shuffleItems(proportionedOranges)
            .slice(0, totalHexes)
            .map(color => ({ color: `--${color}` }));

        const socialIndices = shuffleItems(viableHexIndices).slice(
            0,
            formattedSocials.length
        );
        formattedSocials.forEach((social, i) => {
            state_[socialIndices[i]] = {
                ...state_[socialIndices[i]],
                ...social,
            };
        });

        setState(state_);
    }, [socials]);

    return (
        <StyledHoneycomb>
            {state.map((itemState, i) => (
                <HoneycombHex key={i} {...itemState} />
            ))}
        </StyledHoneycomb>
    );
}
