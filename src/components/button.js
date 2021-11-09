import React from 'react';

function Button(props) {
    const classes = `bg-secondary w-full md:w-auto p-3 text-center text-lg font-bold text-primary ${props.margin} ${props.visibility}`;
    return <button className={classes}>Get a Free Quote</button>;
}

export default Button;
