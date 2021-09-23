import React from 'react';
import { Link } from 'gatsby';
import * as styles from './slide.module.css';

/**
 * Component for a top slide (Hero image with main call to action)
 * @returns JSXElement
 */

//Button specific to the slide so created here
const SlideButton = () => {
    return (
        <div className={styles.button}>
            <Link to="/mentorship" className={styles.buttonText}>
                Join The <br /> Hive
            </Link>
        </div>
    );
};

export default function Slide(props) {
    //If a button is needed for the slide, this parses the prop and adds.
    const button = props.button ? <SlideButton /> : '';

    return (
        <div className={styles.slide}>
            <div className={styles.slideContent}>
                <h1 className={styles.title}>{props.title}</h1>
                <h2 className={styles.subtitle}>{props.subtitle}</h2>
                {button}
            </div>
        </div>
    );
}
