import React from 'react';

function Button(props) {
    const classes = `bg-gradient-to-r from-secondary to-tertiary w-full md:w-auto p-3 text-center text-2xl font-bold text-white font-work shadow-md rounded ${props.margin} ${props.visibility}`;
    return <button className={classes}>Get a Free Quote</button>;
}

export default Button;
