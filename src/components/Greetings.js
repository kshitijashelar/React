import React from 'react';

const Greetings = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <h2>Howdy {props.greeting}!</h2>
        </div>
    );
};

export default Greetings;