import React from 'react';

function Button(props) {
    const classes = `bg-secondary p-3 text-center text-lg ${props.margin} ${props.visibility}`;
    return <button className={classes}>Get a Free Quote</button>;
}

export default Button;
