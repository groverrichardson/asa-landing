import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Cta(props) {
    const classes = `bg-gradient-to-r from-secondary to-tertiary w-full p-3 text-center text-lg iPhone:text-xl iPad:text-xl font-bold text-white font-work shadow-md rounded max-w-xl iPadPro:w-auto ${props.margin} ${props.visibility} ${props.position}`;
    return (
        <Link smooth to="#contact" className={classes}>
            Get a Free Quote
        </Link>
    );
}

export default Cta;
