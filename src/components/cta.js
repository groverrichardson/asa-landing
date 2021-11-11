import React from 'react';

function Cta(props) {
    const classes = `bg-gradient-to-r from-secondary to-tertiary w-full p-3 text-center text-lg iPhone:text-2xl iPad:text-xl font-bold text-white font-work shadow-md rounded ${props.margin} ${props.visibility}`;
    return <button className={classes}>Get a Free Quote</button>;
}

export default Cta;
