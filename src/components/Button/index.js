import React from 'react';
import { Link } from 'gatsby';
import * as styles from './button.module.css';

/**
 * Component for a standard button (has url, theme and text prop)
 * @returns JSXElement
 */

export default function Button(props) {
    //two styles of button can be passed through prop
    const theme = props.theme === 'light' ? styles.light : styles.dark;

    return (
        <Link to={props.url} className={`${theme} ${styles.button}`}>
            {props.text}
        </Link>
    );
}
